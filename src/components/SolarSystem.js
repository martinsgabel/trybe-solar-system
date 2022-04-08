import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet, ind) => (
          <PlanetCards
            key={ ind }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
