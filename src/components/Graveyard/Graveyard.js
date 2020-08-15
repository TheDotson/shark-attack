import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/props/studentShape';
import GraveStone from '../GraveStone/GraveStone';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;

    const graveStoneCards = deadStudents.map((student) => (
      <GraveStone key={student.id} student={student} />
    ));

    return (
      <div>
        <h2 className="title">Graveyard</h2>
        <div className="container graveyard">
          <div className="row">{graveStoneCards}</div>
        </div>
      </div>
    );
  }
}

export default Graveyard;
