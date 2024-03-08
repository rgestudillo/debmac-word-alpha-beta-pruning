import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'

export default function App() {
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [reset, setReset] = useState(false); // State to trigger reset
  const [draw, setDraw] = useState(false); // State to track if the game ends in a draw

  const handleTileClick = (row, col) => {
    // Implement logic for handling tile click here
    console.log(`Tile clicked at (${row}, ${col}) by Player ${currentPlayer}`);
    // Switch player after each turn
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleWinner = (winner) => {
    setWinner(winner);
    setDraw(false); 
  };

  const handleDraw = () => {
    setDraw(true);
    setWinner(null);
  };

  const handleReset = () => {
    // Reset the winner state, current player, draw state, and trigger reset for the board
    setWinner(null);
    setCurrentPlayer(1);
    setDraw(false);
    setReset(true);
  };

  return (
    <div className="text-white game flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-1">DEBMAC's Word Game</h1>
      <Board
        currentPlayer={currentPlayer}
        onTileClick={handleTileClick}
        onWinner={handleWinner}
        onDraw={handleDraw} // Pass the draw handler function to the Board component
        reset={reset}
        setReset={setReset}
      />
      <div className="mt-4">
        {/* <p>Current Player: {currentPlayer}</p> */}
        {winner && (
          <div>
            <p className="text-xl font-bold mt-2">
              Winner is: {winner === 2 ? 'AI' : `Player ${winner}`}
            </p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleReset}
            >
              Play Again
            </button>
          </div>
        )}
        {draw && !winner && (
          <div>
            <p className="text-xl font-bold mt-2">
              Draw!
            </p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleReset}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
