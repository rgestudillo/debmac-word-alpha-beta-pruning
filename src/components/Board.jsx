import React, { useState, useEffect } from 'react';
import { validWords } from '../utils/validWords';

const Board = ({ currentPlayer, onTileClick, onWinner, onDraw,  reset, setReset}) => {
  const [gameEnded, setGameEnded] = useState(false);
  const [winningIndices, setWinningIndices] = useState([]);
  const [draw, setDraw] = useState(false);
  useEffect(() => {
    if (currentPlayer === 2 && !gameEnded) {
      // If it's AI's turn and the game is still ongoing, make the random valid move
      const checker = winnerMove();
      if (!checker) {
        notBadMove();
      }
    }
  }, [currentPlayer, gameEnded]);

  const checkForDraw = () => {
    // Flatten the letters array and check if there are any empty tiles left
    const isEmptyTile = letters.flat().some(tile => tile === '');
    if (!isEmptyTile) {
      setGameEnded(true);
      setDraw(true);
      onDraw(); // Call the onDraw callback to handle the draw event
    }
  };

  const badMove = () => {
    // Check horizontal lines
    for (let i = 0; i < 3; i++) {
      const horizontalLine = letters[i].join('');
      if (horizontalLine.length === 2) {
        for (let j = 0; j < 3; j++) {
          if (letters[i][j] === '') {
            for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
              const newLetters = [...letters];
              newLetters[i][j] = char.toUpperCase();
              setLetters(newLetters);
              const potentialWinner = checkForValidWord();;
              if (potentialWinner) {
                newLetters[i][j] = '';
                setLetters(newLetters);
                return true;
              }else{
                newLetters[i][j] = '';
                setLetters(newLetters);
              }
            }
          }
        }
      }
    }
  
    // Check vertical lines
    for (let j = 0; j < 3; j++) {
      const verticalLine = letters.map(row => row[j]).join('');
      if (verticalLine.length === 2) {
        for (let i = 0; i < 3; i++) {
          if (letters[i][j] === '') {
            for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
              const newLetters = [...letters];
              newLetters[i][j] = char.toUpperCase();
              setLetters(newLetters);
              const potentialWinner = checkForValidWord();;
              if (potentialWinner) {
                newLetters[i][j] = '';
                setLetters(newLetters);
                return true;
              }else{
                newLetters[i][j] = '';
                setLetters(newLetters);
              }
            }
          }
        }
      }
    }
  
    // Check main diagonal
    const mainDiagonal = [letters[0][0], letters[1][1], letters[2][2]].join('');
    if (mainDiagonal.length === 2 ) {
      for (let i = 0; i < 3; i++) {
        const j = i;
        if (letters[i][j] === '') {
          for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            const newLetters = [...letters];
            newLetters[i][j] = char.toUpperCase();
            setLetters(newLetters);
            const potentialWinner = checkForValidWord();;
            if (potentialWinner) {
              newLetters[i][j] = '';
              setLetters(newLetters);
              return true;
            }else{
              newLetters[i][j] = '';
              setLetters(newLetters);
            }
          }
        }
      }
    }
  
    // Check anti-diagonal
    const antiDiagonal = [letters[2][0], letters[1][1], letters[0][2]].join('');
    if (antiDiagonal.length === 2) {
      for (let i = 0; i < 3; i++) {
        const j = 2 - i;
        if (letters[i][j] === '') {
          for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            const newLetters = [...letters];
            newLetters[i][j] = char.toUpperCase();
            setLetters(newLetters);
            const potentialWinner = checkForValidWord();;
            if (potentialWinner) {
              newLetters[i][j] = '';
              setLetters(newLetters);
              return true;
            }else{
              newLetters[i][j] = '';
              setLetters(newLetters);
            }
          }
        }
      }
    }
  
    return false;
  };


  const winnerMove = () => {
    // Check horizontal lines
    for (let i = 0; i < 3; i++) {
      const horizontalLine = letters[i].join('');
      if (horizontalLine.length === 2) {
        for (let j = 0; j < 3; j++) {
          if (letters[i][j] === '') {
            for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
              const newLetters = [...letters];
              newLetters[i][j] = char.toUpperCase();
              setLetters(newLetters);
              const potentialWinner = checkForValidWord();;
              if (potentialWinner) {
                handleTileClick(i, j, char);
                return true;
              }else{
                newLetters[i][j] = '';
                setLetters(newLetters);
              }
            }
          }
        }
      }
    }
  
    // Check vertical lines
    for (let j = 0; j < 3; j++) {
      const verticalLine = letters.map(row => row[j]).join('');
      if (verticalLine.length === 2) {
        for (let i = 0; i < 3; i++) {
          if (letters[i][j] === '') {
            for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
              const newLetters = [...letters];
              newLetters[i][j] = char.toUpperCase();
              setLetters(newLetters);
              const potentialWinner = checkForValidWord();;
              if (potentialWinner) {
                handleTileClick(i, j, char);
                return true;
              }else{
                newLetters[i][j] = '';
                setLetters(newLetters);
              }
            }
          }
        }
      }
    }
  
    // Check main diagonal
    const mainDiagonal = [letters[0][0], letters[1][1], letters[2][2]].join('');
    if (mainDiagonal.length === 2 ) {
      for (let i = 0; i < 3; i++) {
        const j = i;
        if (letters[i][j] === '') {
          for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            const newLetters = [...letters];
            newLetters[i][j] = char.toUpperCase();
            setLetters(newLetters);
            const potentialWinner = checkForValidWord();;
            if (potentialWinner) {
              handleTileClick(i, j, char);
              return true;
            }else{
              newLetters[i][j] = '';
              setLetters(newLetters);
            }
          }
        }
      }
    }
  
    // Check anti-diagonal
    const antiDiagonal = [letters[2][0], letters[1][1], letters[0][2]].join('');
    if (antiDiagonal.length === 2) {
      for (let i = 0; i < 3; i++) {
        const j = 2 - i;
        if (letters[i][j] === '') {
          for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            const newLetters = [...letters];
            newLetters[i][j] = char.toUpperCase();
            setLetters(newLetters);
            const potentialWinner = checkForValidWord();;
            if (potentialWinner) {
              handleTileClick(i, j, char);
              return true;
            }else{
              newLetters[i][j] = '';
              setLetters(newLetters);
            }
          }
        }
      }
    }
  
    return false;
  };

  const notBadMove = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Find empty tiles
    const emptyTiles = [];
    letters.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === '') {
          emptyTiles.push({ row: rowIndex, col: colIndex });
        }
      });
    });
  
    let allBadMoves = true;
  
    // Iterate through empty tiles
    for (const { row, col } of emptyTiles) {
      // Generate a random character

      const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
  
      // Make the move
      const newLetters = [...letters];
      newLetters[row][col] = randomCharacter.toUpperCase(); // Convert to uppercase
      setLetters(newLetters);
  
      // Check if it's a bad move
      if (!badMove()) {
        allBadMoves = false;
        handleTileClick(row, col, randomCharacter);
        return; // Exit the function after making a valid move
      } else {
        // Reset the letter if it's a bad move
        newLetters[row][col] = '';
        setLetters(newLetters);
      }
    }
  
    // If all moves are bad, perform a random move
    if (allBadMoves) {
      const randomIndex = Math.floor(Math.random() * emptyTiles.length);
      const { row, col } = emptyTiles[randomIndex];
      const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
      handleTileClick(row, col, randomCharacter);
    }
  };


  const [letters, setLetters] = useState([
    ['', '', '',],
    ['', '', '', ],
    ['', '', '', ],
  ]);

  const checkForValidWord = () => {
    const rows = letters.map(row => row.join('')); // Join letters in each row to form strings
    const cols = letters.map((_, i) => letters.map(row => row[i]).join('')); // Join letters in each column to form strings
    const diagonals = [
      [letters[0][0], letters[1][1], letters[2][2]].join(''), // Main diagonal
      [letters[2][0], letters[1][1], letters[0][2]].join('') // Anti-diagonal
    ];

    const allLines = [...rows, ...cols, ...diagonals];
    for (const line of allLines) {
      const lowercaseLine = line.toUpperCase();
      if (validWords.includes(lowercaseLine)) {
        return line;
      }
    }
    return null;
  };

  const handleTileClick = (row, col, newLetter) => {
    // Update the grid with the input character or the random character for AI
    if (gameEnded) return; 
    const newLetters = [...letters];
    newLetters[row][col] = (newLetter || '').toUpperCase(); // Convert to uppercase with null check
    setLetters(newLetters);

    // Call the parent component's callback function
    onTileClick(row, col);

    // Check for valid word after each move
    const winner = checkForValidWord();
    if (winner) {
        setGameEnded(true);
        // Save the winning indices
        onWinner(currentPlayer);
        setWinningIndices(getWinningIndices(newLetters));
        alert(`Player ${currentPlayer === 1 ? '1' : 'AI'} wins with the word: ${winner}`);
    }else{
      checkForDraw(); 
    }
  };


  useEffect(() => {
    if (reset) {
      // Reset the board when reset prop changes
      setGameEnded(false);
      setWinningIndices([]);
      setDraw(false);
      setLetters([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
      setReset(false);
    }
  }, [reset]);

  const getWinningIndices = (letters) => {
    const winningIndices = [];

    // Horizontal
    for (let i = 0; i < 3; i++) {
      if (validWords.includes(letters[i].join('').toUpperCase())) {
        winningIndices.push([i, 0], [i, 1], [i, 2]);
      }
    }

    // Vertical
    for (let j = 0; j < 3; j++) {
      if (validWords.includes(letters.map(row => row[j]).join('').toUpperCase())) {
        winningIndices.push([0, j], [1, j], [2, j]);
      }
    }

    // Diagonals
    if (validWords.includes([letters[0][0], letters[1][1], letters[2][2]].join('').toUpperCase())) {
      winningIndices.push([0, 0], [1, 1], [2, 2]);
    }
    if (validWords.includes([letters[2][0], letters[1][1], letters[0][2]].join('').toUpperCase())) {
      winningIndices.push([2, 0], [1, 1], [0, 2]);
    }

    return winningIndices;
  };

  return (
    <div className="board text-white text-bold">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((letter, colIndex) => {
            const isWinningIndex = winningIndices.some(([i, j]) => i === rowIndex && j === colIndex);
            return (
              <div
                key={colIndex}
                className={`tile flex items-center justify-center border w-20 h-20 m-2 cursor-pointer border-white ${
                  letters[rowIndex][colIndex] ? 'border-blue-500 shadow-md rounded-lg bg-gray-800 transform transition duration-300 hover:shadow-lg' : ''
                } ${
                  isWinningIndex ? 'bg-green-500' : ''
                }`}
                onClick={() => {
                  if (currentPlayer === 1) {
                    const inputCharacter = prompt("Enter a single character:");
                    if (inputCharacter && inputCharacter.length === 1) {
                      handleTileClick(rowIndex, colIndex, inputCharacter);
                    } else {
                      alert("Please enter a single character.");
                    }
                  }
                }}
                
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
