import Players from './players.json';
import YearStats from './yearstats.json'
import './App.css';
import {
  Tabs,
  Tab,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './cleanup';
import aaronJones from "./static/AaronJones.jpg";
import aaronRodgers from "./static/AaronRodgers.jpg";
import ajDillon from "./static/AjDillon.jpg";
import randallCobb from "./static/RandallCobb.jpg";
import sammyWatkins from "./static/SammyWatkins.jpg";
import packersLogo from "./static/packersLogo.png";

const playerImage = (playerID) => {
  switch(playerID) {
    case 1:
      return aaronRodgers;
    case 2:
      return randallCobb;
    case 3:
      return sammyWatkins;
    case 4:
      return ajDillon;
    case 5:
      return aaronJones;
    default:
      return 'foo';
  }
}

function App() {
  const setupViewingPlayerData = (data, playerNumber) => {
    const a = data.filter((player) => player.PlayerId === playerNumber)
    return a;
  }

  const [value, setValue] = React.useState(0);
  const [playerID, setPlayerID] = React.useState(1);
  const [viewingPlayer, setViewingPlayer] = React.useState(setupViewingPlayerData(Players, playerID));
  const [seasonStats, setSeasonStats] = React.useState(2021);
  const handleChange = (event, newValue) => {
    const playerNumber = newValue + 1;
    setValue(newValue);
    setPlayerID(playerNumber);
    setViewingPlayer(setupViewingPlayerData(Players, playerNumber));
  };
  const handleSeasonChange = (event) => {
    console.log(event);
    setSeasonStats(event.target.value);
  };
  const gameBySeasonData = (yearStats) => {
    let row = [];
    yearStats.forEach((season) => {
      if(season.PlayerId === playerID && season.Season === seasonStats){
        row.push({
          id: season.GameKey,
          game: season.GameKey,
          season: season.Season,
          team: season.HomeAbbr + ' vs ' + season.AwayAbbr,
          qbAttempts: season.QBAttempts,
          qbCompletions: season.QBCompletions,
          qbYards: season.QBYards,
          qbInterceptions: season.QBInterceptions,
          qbRating: season.QBRating,
          recReceptions: season.RecReceptions,
          recYards: season.RecYards,
          recLong: season.RecLong,
          recLongTDReception: season.RecLongTDReception,
          recTouchdowns: season.RecTouchdowns,
          recTwoPointAttempts: season.RecTwoPointAttempts,
          recTwoPointConversions: season.RecTwoPointConversions,
          recPassTarget: season.RecPassTarget,
          recYAC: season.RecYAC,
          rusAttempts: season.RusAttempts,
          rusYards: season.RusYards,
          rusLong: season.RusLong,
          rusLongTDRush: season.RusLongTDRush,
          rusTouchdowns: season.RusTouchdowns,
          rusTwoPointAttempts: season.RusTwoPointAttempts,
          rusTwoPointConversions: season.RusTwoPointConversions,
          rusYAC: season.RusYAC,
        })
      }
    })
    return row.sort((a, b) => (a.GameKey > b.GameKey) ? 1 : -1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.headerWrapper}>
          <img style={{width: '80px', height: '65px', marginRight: '500px', paddingTop: '8px'}} src={packersLogo} />
          <Tabs
            style={{marginBottom: '50px'}}
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ style: { background: '#FFB612' } }}
          >
            {Players.map((player) =>
              <Tab 
                label={player.PlayerName}
                key={player.PlayerId}
                style={styles.tab}
              />
            )}
          </Tabs>
        </div>
      </header>
      <div style={styles.wrapper}>
        <div style={styles.playerInfo}>
          <div>
            <Avatar sx={{ width: 125, height: 125 }} src={playerImage(playerID)} />
          </div>
          <Stack style={styles.stack} spacing={2}>
            <div>Name :</div>
            <div>Team Name :</div>
            <div>Weight :</div>
            <div>Position :</div>
          </Stack>
          <Stack style={styles.stack} spacing={2}>
            <a style={{color: '#FFB612'}} href="https://www.instagram.com/aaronrodgers12/?hl=en" target="_blank"><div>{viewingPlayer[0]?.PlayerName || ''}</div></a>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/" target="_blank"><div>{viewingPlayer[0]?.TeamName + ', ' + viewingPlayer[0]?.TeamAbbreviation  || ''}</div></a>
            <div>{viewingPlayer[0]?.Wgt || ''}</div>
            <div>{viewingPlayer[0]?.PositionId || ''}</div>
          </Stack>
        </div>
        <div style={styles.bottomData}>
          <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label" style={{color: 'white'}}>Season</InputLabel>
              <Select
                style={styles.dropDown}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={seasonStats}
                label="Season"
                onChange={handleSeasonChange}
              >
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2015}>2015</MenuItem>
                <MenuItem value={2014}>2014</MenuItem>
                <MenuItem value={2013}>2013</MenuItem>
                <MenuItem value={2012}>2012</MenuItem>
                <MenuItem value={2011}>2011</MenuItem>
                <MenuItem value={2010}>2010</MenuItem>
                <MenuItem value={2009}>2009</MenuItem>
                <MenuItem value={2008}>2008</MenuItem>
                <MenuItem value={2007}>2007</MenuItem>
                <MenuItem value={2006}>2006</MenuItem>
                <MenuItem value={2005}>2005</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={styles.box}>
            <DataGrid
              style={styles.grid}
              rows={gameBySeasonData(YearStats)}
              columns={columns}
              pageSize={15}
              rowsPerPageOptions={[15]}
              disableSelectionOnClick
              />
          </Box>
          <div style={{display: 'flex', placeContent: 'space-between'}}>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/team/players-roster/" target="_blank">Full Roster</a>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/news/" target="_blank">Packers News</a>
            <a style={{color: '#FFB612'}} href="https://www.packers.com/schedule//" target="_blank">Schedule</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  headerWrapper: {
    display: 'flex'
  },
  dropDown: {
    outline: 'red',
    color: 'white',
    backgroundColor: '#565656',
    borderColor: 'red'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playerInfo: {
    margin: '50px 0 100px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
  },
  stack: {
    color: 'white',
    alignItems: 'baseline',
    margin: '0 25px 0 25px'
  },
  tab: {
      padding: '2px 34px',
      width: '140px',
      height: '72px',
      color: 'white',
      backgroundColor: '#203731',
  },
  tabItemContainer: {
      background: 'none'
  },
  box: {
    height: '400px',
    background: '#565656'
  },
  grid: {
    width: '900px',
    color: 'white'
  }
}



export default App;
