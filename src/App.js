import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartistBar from "./component/chartist/ChartistBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                </p>
                <div className='grid-container'>
                    <div className='grid-row'>
                        <ChartistBar/>
                    </div>
                    <div className='grid-row'>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
