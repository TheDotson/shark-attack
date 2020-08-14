import React from 'react';
import studentShape from '../../helpers/props/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    dearlyDeparted: studentShape.studentShape,
  }

  render() {
    const { graveStone } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
        <div className="card-body">
          <h5 className="card-title text-uppercase">{graveStone.firstName} {graveStone.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default GraveStone;
