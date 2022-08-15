import Players from './players.json';
import './App.css';
import React from 'react';
import { PlayerInfo } from './components/PlayerInfo';
import { PlayerStats } from './components/PlayerStats';
import { Header } from './components/Header';

function App() {
  const setupViewingPlayerData = (data, playerNumber) => {
    const a = data.filter((player) => player.PlayerId === playerNumber)
    return a;
  }

  const [value, setValue] = React.useState(0);
  const [playerID, setPlayerID] = React.useState(1);
  const [viewingPlayer, setViewingPlayer] = React.useState(setupViewingPlayerData(Players, playerID));
  const handleChange = (event, newValue) => {
    const playerNumber = newValue + 1;
    setValue(newValue);
    setPlayerID(playerNumber);
    setViewingPlayer(setupViewingPlayerData(Players, playerNumber));
  };

  return (
    <div className="App">
      <Header value={value} handleChange={handleChange} />
      <div style={styles.wrapper}>
        <PlayerInfo playerID={playerID} viewingPlayer={viewingPlayer[0]}/>
        <div style={styles.bottomData}>
          <PlayerStats playerID={playerID} />
          <div style={{display: 'flex', placeContent: 'space-between'}}>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/team/players-roster/" target="_blank" rel="noreferrer">Full Roster</a>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/news/" target="_blank" rel="noreferrer">Packers News</a>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/schedule//" target="_blank" rel="noreferrer">Schedule</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}

export default App;
