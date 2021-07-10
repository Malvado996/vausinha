import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  

    state = {
      title: 'Shelter'
    }

    handleFetch = () => {
        fetch("/api/v1/foodpantries")
        .then(response => response.json())
        // .then(data => console.log(data.data[0].name))
        .then(data => this.setState({title: data.data[0].name}));
    }
  
    render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={ this.handleFetch }>Fetch API</button>
          <p>{ this.state.title }</p>
        </header>
      </div> )
    }
  
}

export default App;


