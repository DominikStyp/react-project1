import React from 'react';
import logo from './logo.svg';
import './App.css';
 import MyList from "./DominikComponents/MyList";
// import People from "./DominikComponents/People";
// import MyForm from "./DominikComponents/MyForm";
//import MyFormCreatedByFormikLib from "./DominikComponents/MyFormCreatedByFormikLib";

class App extends React.Component {

    render(){
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
               <MyList />
              </header>
            </div>
          );
    }
}

export default App;
