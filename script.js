// Gameboard Module Pattern
const gameboard = (() => {
    let board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
  
    // Returns the current state of the board
    const getBoard = () => board;
  
    // Play a turn if possible
    const playTurn = (row, col, symbol) => {
      // Check if input is out of bounds
      if (row < 0 || row > 2 || col < 0 || col > 2) {
        return false;
      }
      if (board[row][col] === "-") {
        board[row][col] = symbol;
        return true;
      }
      return false;
    };
  
    // Print the board in console
    const printBoard = () => {
      console.log(
        board.map((row) => row.join(" | ")).join("\n---------\n")
      );
      console.log("\n");
    };
  
    return { getBoard, playTurn, printBoard };
  })();
  
  // Factory function to create a Player
  const createPlayer = (name, symbol) => {
    return { name, symbol };
  };
  
  // Main Game Controller
  const gameController = () => {
    const players = [
      createPlayer("Player 1", "X"),
      createPlayer("Player 2", "O"),
    ];
    let currentPlayer = players[0];
  
    // Change current player
    const changeTurn = () => {
      currentPlayer = (currentPlayer === players[0]) 
        ? players[1] 
        : players[0];
    };
  
    // Resturns current Player
    const getCurrentPlayer = () => currentPlayer;
  
    // Checks if the game is won
    const checkVictory = (player) => {
      const board = gameboard.getBoard();
      const s = player.symbol;
  
      // Check horizontally
      for (let i = 0; i < 3; i++) {
        if (board[i][0] === s && board[i][1] === s && board[i][2] === s) {
          return true;
        }
      }
  
      // Check Vertically
      for (let j = 0; j < 3; j++) {
        if (board[0][j] === s && board[1][j] === s && board[2][j] === s) {
          return true;
        }
      }
  
      // Check Diagonally
      if (
        (board[0][0] === s && board[1][1] === s && board[2][2] === s) ||
        (board[0][2] === s && board[1][1] === s && board[2][0] === s)
      ) {
        return true;
      }
  
      return false;
    };
  
    // Start Game
    gameboard.printBoard();
    let turn = 0;
  
    // Play until 9 turns
    while (turn < 9) {
      alert("Current player: " + currentPlayer.name);
      const row = parseInt(prompt("Enter row (0-2): "));
      const col = parseInt(prompt("Enter column (0-2): "));
  
      const played = gameboard.playTurn(row, col, currentPlayer.symbol);
  
      if (played) {
        gameboard.printBoard();
        
        // Chech if the game is won after the play
        if (checkVictory(currentPlayer)) {
          alert("Player " + currentPlayer.name + " wins!");
          break;
        }
  
        // If there is no victory, switch the player
        changeTurn();
        turn++;
      } else {
        console.log("Invalid move, try again.");
      }
    }
  
    // If we get to 9 turns without vicory it's a draw
    if (turn === 9) {
      alert("It's a draw!");
    }
  };
  
  const screenController = ()=>{
    const game = gameController();
    const turn = document.querySelector(".turn");
    const board = document.querySelector(".board");

    const updateScreen = ()=>{
        // Clear the board
        board.textContent = "";
    }

  }
  screenController();