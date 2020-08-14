import React from 'react';

class Student extends React.Component {
  render() {
    const { student } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
        <div className="card-body">
          <h5 className="card-title text-uppercase">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Student;
