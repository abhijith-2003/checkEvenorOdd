import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState('');
  const [check, setCheck] = useState('');

  const checknum = () => {
    setCheck(state % 2 === 0 ? 'Even' : 'Odd');
  };

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={checknum}>Check</button>
      <h1>{check}</h1>
    </div>
  );
}

export default App;
