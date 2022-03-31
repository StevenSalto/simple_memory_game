//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const numOfGameButtons = 6;
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];  //default pattern
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var strikes = 0;
var timer = 10;
var clock;
function startGame(){
  //initialize game variables
  clearInterval(clock);
  progress = 0;
  gamePlaying = true;
  strikes = 0;
  clueHoldTime = 1000
  timer = 10;
  //randomly generate a pattern
  generatePattern();
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame() {
  clearInterval(clock);
  gamePlaying=false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}
function generatePattern(){
  //set each element of pattern to a random button's number
  for(let i in pattern){
    pattern[i] = Math.floor(Math.random() * (numOfGameButtons)) + 1;
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 150,
  2: 250, 
  3: 350, 
  4: 450, 
  5: 550,
  6: 650
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function startClock(){
  clock = setInterval(function() {document.getElementById("clock").innerHTML = timer;timer-=1;if(timer<0){clearInterval(clock);loseGame();}}, 1000);
}

function playClueSequence(){
  clearInterval(clock);
  guessCounter = 0;
  timer=10
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  document.getElementById("gameButtonArea").style.pointerEvents = "none";
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(function(){playSingleClue(pattern[i]); if(i==progress){startClock(); document.getElementById("gameButtonArea").style.pointerEvents = "auto";};},delay) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime-=120;
}

function loseGame(){
  stopGame();
  clearInterval(clock);
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  clearInterval(clock);
  alert("Game Over. You won!");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  } else {
    if(strikes >= 2){
      loseGame();
    } else {
      strikes+=1;
      alert("You have " + (3 - strikes) + " attempts left!");
      playClueSequence();
      clueHoldTime+=120;
    }
  }
}
