import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/props/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ));

    return (
      <div>
        <h2 className="title">Shark Tank</h2>
        <div className="container shark-tank">
          <div className="row">{studentCards}</div>
        </div>
      </div>
    );
  }
}

export default SharkTank;
