import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Table() {
  useEffect(() => {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 7; col++) {
        $('<div></div>').addClass(`cell row${row} col${col}`).appendTo('.table');
      }
    }

  }, []);

  return (
    <div className='table'>
    </div>
  );
};