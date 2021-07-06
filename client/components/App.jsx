import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import $ from 'jquery';
import { reset, dropPiece, checkRows, checkColumns, checkDiagonals, checkTie } from '../../utils/functions.js';

export default function App() {
  const [player, setPlayer] = useState(1);
  const [rounds, setRounds] = useState(1);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    $('.cell').click(e => {
      if (!winner && !tie) {
        if (!$(e.target).hasClass('yellow') && !$(e.target).hasClass('red')) {
          if (player === 1) {
            var element = dropPiece(e.target, 'yellow', '1');
            if (checkRows(element, '1') || checkColumns(element, '1') || checkDiagonals(element, '1')) {
              setWinner(true);
              $('.winner').css({color: '#FFDC00'});
            } else {
              setPlayer(2);
            }
          } else {
            var element = dropPiece(e.target, 'red', '2');
            if (checkRows(element, '2') || checkColumns(element, '2') || checkDiagonals(element, '2')) {
              setWinner(true);
              $('.winner').css({color: '#FF4136'});
            } else {
              setPlayer(1);
            }
          }
        }
        if (checkTie()) setTie(prev => !prev);
      }
    });

    return () => $('.cell').off('click');

  }, [player, rounds, tie]);

  function handleReset() {
    setPlayer(1);
    setWinner(false);
    setTie(false);
    setRounds(prev => prev);
    reset();
  };

  return (
    <div className='container'>
      <h2>Connect Four</h2>
      {winner && <div className='winner'>Player {player} Won!</div>}
      {tie && <div className='tie'>Tie!</div>}
      <Table player={player}/>
      <div className='footer'>
        {player === 1 && <div>Turn: <span className='player1'>Player 1</span></div>}
        {player === 2 && <div>Turn: <span className='player2'>Player 2</span></div>}
        <button onClick={e => handleReset()}>Reset Game</button>
      </div>
    </div>
  );
};