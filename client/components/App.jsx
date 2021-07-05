import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import $ from 'jquery';
import { reset, dropPiece } from '../../utils/functions.js';

export default function App() {
  const [player, setPlayer] = useState(1);

  useEffect(() => {
    $('.cell').click(e => {
      if (!$(e.target).hasClass('yellow') && !$(e.target).hasClass('red')) {
        if (player === 1) {
          // $(e.target).addClass('yellow');
          dropPiece(e.target, 'yellow');
          setPlayer(2);
        } else {
          // $(e.target).addClass('red');
          dropPiece(e.target, 'red');
          setPlayer(1);
        }
        console.log(e.target);
      }
    });

    return () => $('.cell').off('click');

  }, [player]);

  function handleReset() {
    setPlayer(1);
    reset();
  };

  return (
    <div className='container'>
      <h2>Connect Four</h2>
      <Table player={player}/>
      <div className='footer'>
        {player === 1 && <div>Turn: <span className='player1'>Player 1</span></div>}
        {player === 2 && <div>Turn: <span className='player2'>Player 2</span></div>}
        <button onClick={e => handleReset()}>Reset Game</button>
      </div>
    </div>
  );
};