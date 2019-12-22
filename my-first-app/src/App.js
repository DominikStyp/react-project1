import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MyList from "./DominikComponents/MyList";
// import People from "./DominikComponents/People";
import MyForm from "./DominikComponents/MyForm";

// TODO: use Formik library to make a form

class App extends React.Component {

    constructor(){
        super();
    }

    render(){
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
               <MyForm />
              </header>
            </div>
          );
    }
}

export default App;
