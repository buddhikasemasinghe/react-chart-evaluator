import React, { Component } from 'react';
import './App.css';
import Header from "./view/Header/Header";
import ChartContainerComponent from "./view/Container/ChartContainerComponent";
import Footer from "./view/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Header/>
                <ChartContainerComponent/>
                <Footer/>
            </div>
        );
    }
}

export default App;
