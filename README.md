# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Steven Salto**

Time spent: **15** hours spent in total

Link to project: https://glitch.com/edit/#!/codepath-site-pre-work---memory-game?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://media.giphy.com/media/JvROqwSnbKE5fadHKt/giphy.gif)
![](https://media.giphy.com/media/o9Do4S48KIchBYz28b/giphy.gif)
![](https://media.giphy.com/media/CPCUHmE4h9cGnXihUE/giphy.gif)
![](https://media.giphy.com/media/V3HzlJ946tknG9Vh3Z/giphy.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   I refrenced the pre-work guide and w3schools.com for help with syntax (I've been working with python and c++ lately so my webdev skills are a little rusty).
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   I found the ticking clock difficult, specifically getting the timer to start after the pattern finished flashing.
   I overcame this issue by first better understanding the function setTimeout and asynch vs synch programming by reading online articles(w3schools).
   After realising my timer was starting too early because the flashing clues were runnning asynchronously (in other words, the code was not being run in order, instead the clues were waiting in "the background" so-to-speak until their timer ended and then executing, letting other code execute in the mean time), 
   the solution was simply to write an inline function that started the timer alongside the last clue, with an equivalent timer. This way, the timer would begin at around the same time the last clue finished playing. 
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   How is website loading speed improved? How does the server-host model work? What are cookies? How do I center a div?? How can I better use asynch and synch programming to be a better webdeveloper? How do these techniques work on a dealer, more technical level?
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I would most likely focus on adding more features. I believe a fun option would be to do a solely sound-based memory game, so basically removing the colors. I'd also added images to my buttons instead of colors and would let the user customize how they want to play the game
   via a starting screen that let them select if they wanted simple tones, songs, images, colors, etc. I definetly could see myself spending a lot of time here as I find it fun to get creative.
   Finally, I'd work on refactoring code as it would be essential to optimal running speeds and a fun challenge.

## Interview Recording URL Link

[My 5-minute Interview Recording] 

https://youtu.be/xA8OB2SOAaY
https://drive.google.com/file/d/1xgW2d-mbBrPhZJNtJ5V8vylc30Q5wCEC/view?usp=sharing
(Both links show the same video but the version on google drive should be downloadable.)

## License

    Copyright Steven Salto

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
