📜 Project Overview

Simon Says ek classic memory challenge game hai jo 1978 me popular hua tha. Is project me, hum is game ka digital version banate hain using HTML, CSS, JavaScript.
Game ka goal hai: Game ek random sequence of colors/sounds generate karta hai, aur player ko wahi sequence sahi order me repeat karna hota hai.
Jitna lamba sequence hota hai, utna game challenging ho jaata hai.

🎯 Game Objective

Player ko apni memory aur concentration use karke sequence repeat karni hoti hai.

Har correct round ke baad sequence ek step lambi ho jaati hai.

Game chalti rahegi jab tak player galat press na kare.

Final score = successfully complete kiye gaye rounds.

⚙ Game Flow / Working

Game Start

Player game shuru karta hai (keyboard key press ya start button se).

Game randomly ek color choose karta hai aur usko blink/sound play karta hai.

Player Turn

Player mouse click karke ya touch karke wahi color button press karta hai.

Agar sequence me ek se zyada steps hain, to player ko pura sequence yaad karke press karna hota hai.

Check Answer

Har press ke baad game check karta hai ki pressed color sequence ke corresponding color ke barabar hai ya nahi.

Agar galat → Game Over.

Agar sahi → Next step continue.

Next Level

Agar pura sequence sahi ho gaya → Score +1, naya random color add hota hai sequence me, aur game repeat hota hai.

🖼 User Interface

4 Colored Buttons:

Green

Red

Yellow

Blue

Start Button / Keypress Trigger

Score Display

Animations: Button blink/flash when selected.

Sounds: Har color ka alag sound effect.

💻 Technical Implementation

1. HTML Structure

div elements for 4 colored buttons.

h1 for game title / level.

Optional start button.

2. CSS Styling

Flexbox/ Grid layout for placing 4 buttons.

Button hover and active states.

Animation for button press.

3. JavaScript Logic

Variables:

gamePattern → Game ka generated sequence.

userClickedPattern → Player ka input sequence.

level → Current level number.

started → Boolean to track if game started or not.

Functions:

nextSequence() → Random color generate kare, gamePattern me push kare, blink aur sound play kare.

playSound(name) → Sound play kare given color ka.

animatePress(currentColor) → Button press ka animation.

checkAnswer(currentLevel) → Player ke input ko check kare gamePattern ke against.

startOver() → Variables reset kare after Game Over.

Event Listeners:

Button clicks (detect player input).

Keypress / Start button to begin game.

🔊 Sounds

Har color ka apna alag audio file hota hai, jaise:

Green → green.mp3

Red → red.mp3

Yellow → yellow.mp3

Blue → blue.mp3

Wrong Answer → wrong.mp3

📈 Features to Add for Improvement

High Score tracking (localStorage).

Timer to press next sequence (time-based challenge mode).

Difficulty modes (Easy, Medium, Hard).

Mobile responsive design.

Multiplayer mode (turn-based).

🎓 Learning Outcomes

DOM Manipulation in JavaScript.

Event Handling (click, keypress).

Array operations (push, reset, compare).

Random number generation (Math.random()).

Playing audio in browser.

Simple animations with CSS & JS.