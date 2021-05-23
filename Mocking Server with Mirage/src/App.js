import React from 'react';
import './App.css';
import { Todos } from './Component/Todo'
import MirageServer from './Mirage/index';

MirageServer()
function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
