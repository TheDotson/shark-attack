import React from 'react';
import Corpse from '../GraveStone/GraveStone';

class Graveyard extends React.Component {
  render() {
    const { dearlyBeloved } = this.props;

    const graveStoneCards = dearlyBeloved.map((graveStone) => (
      <Corpse key={graveStone.id} graveStone={graveStone} />
    ));

    return (
      <div>
        <h2>Graveyard</h2>
        <div className="cards-columns">
          {graveStoneCards}
        </div>
      </div>
    );
  }
}

export default Graveyard;
