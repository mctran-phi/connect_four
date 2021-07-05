import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import $ from 'jquery';
import { reset, dropPiece, checkRows, checkColumns, checkDiagonals } from '../../utils/functions.js';

export default function App() {
  const [player, setPlayer] = useState(1);
  const [rounds, setRounds] = useState(1);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    $('.cell').click(e => {
      if (!winner) {
        if (!$(e.target).hasClass('yellow') && !$(e.target).hasClass('red')) {
          if (player === 1) {
            dropPiece(e.target, 'yellow', '1');
            if (checkRows(e.target, '1') || checkColumns(e.target, '1') || checkDiagonals(e.target, '1')) {
              setWinner(true);
            } else {
              setPlayer(2);
            }
          } else {
            dropPiece(e.target, 'red', '2');
            if (checkRows(e.target, '2') || checkColumns(e.target, '2') || checkDiagonals(e.target, '2')) {
              setWinner(true);
            } else {
              setPlayer(1);
            }
          }
        }
      }
    });

    return () => $('.cell').off('click');

  }, [player, rounds]);

  function handleReset() {
    setPlayer(1);
    setWinner(false);
    setRounds(prev => prev);
    reset();
  };

  return (
    <div className='container'>
      <h2>Connect Four</h2>
      {winner && <div className='winner'>Player {player} Won!</div>}
      <Table player={player}/>
      <div className='footer'>
        {player === 1 && <div>Turn: <span className='player1'>Player 1</span></div>}
        {player === 2 && <div>Turn: <span className='player2'>Player 2</span></div>}
        <button onClick={e => handleReset()}>Reset Game</button>
      </div>
    </div>
  );
};