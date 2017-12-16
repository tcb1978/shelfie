import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header'
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      picture: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/api/test')
      .then(response => {
        this.setState({
          picture: response.data
        })
      })
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Main />

      </div>
    );
  }
}

export default App;
