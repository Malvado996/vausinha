import React from 'react';
import logo from './logo.svg';
import ChartWrapper from './ChartWrapper';
import './App.css';


class App extends React.Component {
  

    state = {
      data: '',
      title: '',
      isApiCalled: false
    }

    handleFetch = () => {
        fetch("/api/v1/foodpantries")
        .then(response => response.json())
        // .then(data => console.log(data.data[0].name))
        .then(data => this.setState({
          data: data.data[0],
          title: data.data[0].name,
          isApiCalled: true
        }))
    }
  
    render() {

      const isApiCalled = this.state.isApiCalled;

      let graph;

      if(!isApiCalled) {
        graph = <span></span>
      } else {
        graph = <ChartWrapper />;
        // console.log(this.state.data)
      }

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{ this.state.title }</p>
            <p>{ this.state.data['description']}</p>
            { graph }
            <button onClick={ this.handleFetch }>Fetch API</button>
          </header>
        </div> )
    }
  
}

export default App;


