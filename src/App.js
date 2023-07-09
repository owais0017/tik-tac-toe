import React from 'react';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default function Board() {

  const [isnext, setIsnext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  const onSquareClick = (i) => {
    const nextSquares = square.slice();
    if (square[i] || checkWinner(square)) {
      return;
    }
    if (isnext) {
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = '0';
    }
    setSquare(nextSquares);
    const isNext = isnext
    setIsnext(!isNext);
  }

    const winner = checkWinner(square);
    let status;

    if (winner) {
      status = "Winner : " + winner;
    }
    else {
      status = "next player: " + (isnext ? 'X' : '0');
    }
    return (
      <div className='main-frame'>
         <div className='status'> {status} </div>
        <div className='board-row'>
          <Square value={square[0]} onSquareClick={() => onSquareClick(0)} />
          <Square value={square[1]} onSquareClick={() => onSquareClick(1)} />
          <Square value={square[2]} onSquareClick={() => onSquareClick(2)} />
        </div>
        <div className='board-row'>
          <Square value={square[3]} onSquareClick={() => onSquareClick(3)} />
          <Square value={square[4]} onSquareClick={() => onSquareClick(4)} />
          <Square value={square[5]} onSquareClick={() => onSquareClick(5)} />
        </div>
        <div className='board-row'>
          <Square value={square[6]} onSquareClick={() => onSquareClick(6)} />
          <Square value={square[7]} onSquareClick={() => onSquareClick(7)} />
          <Square value={square[8]} onSquareClick={() => onSquareClick(8)} />
        </div>
      </div>

    );
  }
  

function checkWinner(square) {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < possibilities.length; i++) {
    const [a, b, c] = possibilities[i]
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
};

