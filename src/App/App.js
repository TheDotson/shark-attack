import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Shark Attack!</h2>
        <button className="btn btn-info">
        <i className="fas fa-bullhorn"></i> I am a button <i className="fas fa-bullhorn"></i></button>
      </div>
    );
  }
}

export default App;
