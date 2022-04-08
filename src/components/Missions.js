import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
import './Missions.css';
import './Title.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission, ind) => (
            <div key={ ind } className="mission">
              <MissionCard
                key={ ind }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
