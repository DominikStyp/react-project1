import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyList from "./DominikComponents/MyList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyList/>
      </header>
    </div>
  );
}

export default App;
