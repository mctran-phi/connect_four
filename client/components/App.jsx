import React from 'react';
import Table from './Table.jsx';

export default function App() {
  return (
    <div className='container'>
      <h2>Connect Four</h2>
      <Table />
      <button>Reset Game</button>
    </div>
  );
};