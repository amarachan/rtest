import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Mymap from './components/Rmap'

function App() {
  return (
    <div className="App">
      {/* adding props */}

      <Greet name="King" codeName="C" />
      <Greet name="Jack" codeName="V"/>
     <Welcome name="Queen"/>
     <Hello name="Joker" codeName="A"/>
     <Mymap/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World! 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

export default App;
