import React from 'react';
import Student from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  render() {
    const { livingStudents } = this.props;

    const studentCards = livingStudents.map((liveStudent) => (
      <Student key={liveStudent.id} liveStudent={liveStudent} />
    ));

    return (
      <div>
        <h2>Shark Tank</h2>
        <div className="card-columns">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
