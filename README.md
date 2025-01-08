Tic-Tac-Toe in JavaScript

This project is a simple Tic-Tac-Toe game written in JavaScript. It demonstrates several key JavaScript concepts, including:
	•	IIFE (Immediately Invoked Function Expression)
	•	Factory Functions
	•	Module Pattern
	•	Closures

Project Structure

The game is split into three main parts:
	1.	gameboard – a module handling the board state
	2.	createPlayer – a factory function to create players
	3.	gameController – the main controller that manages gameplay logic (turns, victory, and tie)

1. IIFE (Immediately Invoked Function Expression)

const gameboard = (() => {
  // ...
})();

An IIFE is a function that immediately invokes itself right after being defined. In this code, the gameboard constant is assigned the result of the IIFE. This approach allows us to:
	•	Encapsulate the logic and variables related to the gameboard in a private scope.
	•	Avoid polluting the global scope with unnecessary variables.
	•	Expose only the methods or data we need via the return statement.

2. Factory Function

const createPlayer = (name, symbol) => {
  return { name, symbol };
};

A factory function is a function that creates and returns a new object without using a class or constructor. In this case, createPlayer returns a player object containing a name and a symbol.

This pattern is beneficial because:
	•	It separates the logic of creating a player from the rest of the code.
	•	It makes it easy to instantiate players with different properties.

3. Module Pattern

Using an IIFE for gameboard is an example of the Module Pattern, where related functionality is enclosed in a single structure. This pattern:
	•	Allows us to organize related code into modules.
	•	Helps us avoid polluting the global namespace.
	•	Controls what is exposed to the outside world via return { ... }.

4. Closures

When we define functions inside an IIFE or inside another function, those inner functions can access the variables defined in their outer function’s scope even after the outer function has returned. This is known as a closure and it’s a powerful feature of JavaScript. In our case:
	•	The playTurn and printBoard methods in the gameboard module can still access the board variable even though it is not returned directly.
	•	Similarly, any function you define inside gameController can access variables declared in the gameController scope (like players, currentPlayer, etc.).

How It Works
	1.	Board Initialization: The gameboard IIFE creates a 3x3 array representing the board.
	2.	Player Creation: The createPlayer factory function is used to set up two players (e.g., “Player 1” with symbol “X” and “Player 2” with symbol “O”).
	3.	Game Flow: The gameController function orchestrates:
	•	Displaying the board
	•	Prompting the user to pick a row and column
	•	Updating the board
	•	Checking for victory or a draw
	•	Switching turns

Running the Game
	1.	Load the JavaScript file in an HTML page or run it in a JavaScript environment (e.g., browser console, Node.js).
	2.	The game will prompt for input for each turn (row and column numbers).
	3.	Once a player wins or all moves are played, the game ends.

Enjoy exploring the code and seeing how these JavaScript patterns can work together to build a simple yet illustrative game!