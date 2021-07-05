import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function Table() {
  const [player, setPlayer] = useState(1);


  useEffect(() => {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 7; col++) {
        $('<div></div>').addClass(`cell row=${row} col=${col}`).appendTo('.table');
      }
    }

  }, []);

  useEffect(() => {
    $('.cell').click(e => {
      if (!$(e.target).hasClass('yellow') && !$(e.target).hasClass('red')) {
        if (player === 1) {
          $(e.target).addClass('yellow');
          setPlayer(2);
        } else {
          $(e.target).addClass('red');
          setPlayer(1);
        }
        console.log(e.target);
      }
    });

    return () => $('.cell').off('click');

  }, [player]);

  return (
    <div className='table'>
    </div>
  );
};