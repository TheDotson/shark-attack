import React from 'react';
import studentShape from '../../helpers/props/studentShape';
import headstone from '../../assets/headstone.png';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card border-0 studentCard">
        <div className="card-body">
          <img src={headstone} alt="Student" />
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default GraveStone;
