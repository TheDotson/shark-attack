import React from 'react';
import studentShape from '../../helpers/props/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudent: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card border-0 studentCard">
        <div className="card-body">
          <img src={student.imgUrl} alt="Student" />
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
