import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/foodpantries').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <p>{this.state.response.body}</p>
      </div>
    );
  }
}

export default App;