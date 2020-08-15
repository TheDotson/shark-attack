import React from 'react';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  sharkAttack = () => {
    studentData.followTheLight();
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  render() {
    const { students, deadStudents } = this.state;
    return (
      <div className="App">
        <button className="btn btn-danger my-3" onClick={this.sharkAttack}><i className="fas fa-exclamation-triangle"></i> SHARK ATTACK <i className="fas fa-exclamation-triangle"></i></button>
        <SharkTank students={students} />
        <Graveyard deadStudents={deadStudents}/>
      </div>
    );
  }
}

export default App;
