import React, { useState } from 'react';
import Square from '../Component/Square';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Css/Board.css'
import '../assets/Css/Style.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner === 'X' ? 'Dora' : 'Boots'}`;
  } else if (squares.every(square => square)) {
    status = "It's a draw!";
  } else {
    status = ` Player: ${xIsNext ? 'Dora' : 'Boots'}`;
  }

  const reset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => (
    <Square 
      value={squares[i]} 
      onClickHandle={() => handleClick(i)}
      player={squares[i] === 'X' ? 'Dora' : 'Boots'}
    />
  );

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="board-container">
            {[0, 1, 2].map((row) => (
              <div key={row} className="board-row">
                {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <h3 className="mb-3">{status}</h3>
            <Button variant="primary" onClick={reset}>
              Reset Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;