import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (

            <header className="App-header">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">SHELFIE</h1>
                </div>
            </header>

        );
    }
}

export default Header;