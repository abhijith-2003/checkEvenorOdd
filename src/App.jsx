import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [state, setState] = useState('');
  const [check, setCheck] = useState('');

  const checknum = () => {
    setCheck(state % 2 === 0 ? 'Even' : 'Odd');
  };

  return (
    <div className='container'>
      <div className='input'>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={checknum}>Check</button>
      </div>
      <h1 className='result'>{check}</h1>
    </div>
  );
}

export default App;
