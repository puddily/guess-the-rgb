# Guess the RGB
## About
Guess the RGB is a simple game where you guess the RGB (red, green, and blue) values that create a given color and see how close you can get.

## How to play
Play by entering the red, green, and blue values into the respective checkboxes. Once you enter your guess and press the submit button, you will receive a score based on your guess (up to 765, based off of how much your guess was away from the real color). Once you play 5 rounds, the game will show you your guesses, the actual colors you were attempting to guess, and a breakdown of your total score. 

Try and score as high as possible!

## Gameplay
![Pasted image 20220608052610](https://user-images.githubusercontent.com/40770861/172594805-c5a0bcaa-0e33-4fa9-b8bb-321b4756e503.png)
![image](https://user-images.githubusercontent.com/40770861/220204057-2e77f602-ad8b-4d8e-a09d-3101d01153b8.png)
![image](https://user-images.githubusercontent.com/40770861/220204086-eb922cc8-603f-470b-81e9-4e1cda4741de.png)

## Running Guess the RGB locally
Download the latest release file and unzip it, then run index.html (using your desired browser).

## Running Guess the RGB development environment
First, you will need to install Node.js. Instructions can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

After that, navigate to the base directory of the repository and run npm install. Once the modules finish installing, run npm start. The server will be started and you can connect to the game through the PC you are serving it from (runs on localhost:3000 by default)

To build, execute "npm run build" from the base directory of the repository. The current build will be saved to "/build".
