import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyList from "./DominikComponents/MyList";
import People from "./People";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <People />
      </header>
    </div>
  );
}

export default App;
