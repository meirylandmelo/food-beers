import React from 'react';
import './App.css';

import Beer from './components/Beer'
import Food from './components/Food'

function App() {
  return (
    <div className="App">
      <Food />
      <Beer />
    </div>
  );
}


export default App;
