import React from 'react';
import SharkTank from '../components/SharkTank/SharkTank';
import studentData from '../helpers/data/studentData';
import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });

    const dearlyBeloved = studentData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  render() {
    const { livingStudents } = this.state;
    return (
      <div className="App">
        <h2>Shark Attack!</h2>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
