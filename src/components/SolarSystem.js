import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCard';
import planets from '../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
        <div className="solar-system">
          {planets.map((planet, ind) => (
            <div key={ ind } className="planet">
              <PlanetCards
                key={ ind }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
