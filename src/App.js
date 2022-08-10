import Players from './players.json';
import YearStats from './yearstats.json'
import './App.css';
import { Tabs, Tab, Box } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const playerData = Players.map((player) => player);
  const yearStats = YearStats.map((stats) => stats);
  const [value, setValue] = React.useState(0);
  const [playerID, setPlayerID] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPlayerID(newValue + 1);
  };

  const columns = [
    {
      field: 'game',
      headerName: 'GameKey',
      width: 100,
      editable: false,
    },
    {
      field: 'season',
      headerName: 'Year',
      width: 100,
      editable: false,
    },
    {
      field: 'team',
      headerName: 'Teams',
      width: 175,
      editable: false,
    },
    {
      field: 'qbAttempts',
      headerName: 'QBAttempts',
      width: 150,
      editable: false,
    },
    {
      field: 'qbCompletions',
      headerName: 'QBCompletions',
      width: 150,
      editable: false,
    },
    {
      field: 'qbYards',
      headerName: 'QBYards',
      width: 150,
      editable: false,
    },
    {
      field: 'qbInterceptions',
      headerName: 'QBInterceptions',
      width: 150, //Could probably make this width smaller for Rodgers ;)
      editable: false,
    },{
      field: 'qbRating',
      headerName: 'QBRating',
      width: 150,
      editable: false,
    },
    {
      field: 'recReceptions',
      headerName: 'RecReceptions',
      width: 150,
      editable: false,
    },
    {
      field: 'recYards',
      headerName: 'RecYards',
      width: 150,
      editable: false,
    },
    {
      field: 'recLong',
      headerName: 'RecLong',
      width: 150,
      editable: false,
    },
    {
      field: 'recLongTDReception',
      headerName: 'RecLongTDReception',
      width: 150,
      editable: false,
    },
    {
      field: 'recTouchdowns',
      headerName: 'RecTouchdowns',
      width: 150,
      editable: false,
    },
    {
      field: 'recTwoPointAttempts',
      headerName: 'RecTwoPointAttempts',
      width: 150,
      editable: false,
    },
    {
      field: 'recTwoPointConversions',
      headerName: 'RecTwoPointConversions',
      width: 150,
      editable: false,
    },
    {
      field: 'recPassTarget',
      headerName: 'RecPassTarget',
      width: 150,
      editable: false,
    },
    {
      field: 'recYAC',
      headerName: 'RecYAC',
      width: 150,
      editable: false,
    },
    {
      field: 'rusAttempts',
      headerName: 'RusAttempts',
      width: 150,
      editable: false,
    },
    {
      field: 'rusYards',
      headerName: 'RusYards',
      width: 150,
      editable: false,
    },
    {
      field: 'rusLong',
      headerName: 'RusLong',
      width: 150,
      editable: false,
    },
    {
      field: 'rusLongTDRush',
      headerName: 'RusLongTDRush',
      width: 150,
      editable: false,
    },
    {
      field: 'rusTouchdowns',
      headerName: 'RusTouchdowns',
      width: 150,
      editable: false,
    },
    {
      field: 'rusTwoPointAttempts',
      headerName: 'RusTwoPointAttempts',
      width: 150,
      editable: false,
    },
    {
      field: 'rusTwoPointConversions',
      headerName: 'RusTwoPointConversions',
      width: 150,
      editable: false,
    },
    {
      field: 'rusYAC',
      headerName: 'RusYAC',
      width: 150,
      editable: false,
    },
  ];

  const sortOutPlayerData = (yearStats) => {
    let row = [];
    yearStats.forEach((season) => {
      if(season.PlayerId === playerID && season.Season === 2021){
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
        <Tabs 
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{ style: { background: '#FFB612' } }}
        >
          {playerData.map((player) =>
            <Tab 
              label={player.PlayerName}
              key={player.PlayerId}
              style={styles.tab}
            />
          )}
        </Tabs>
      </header>
      <Box style={styles.box}>
        <DataGrid
          style={styles.grid}
          rows={sortOutPlayerData(yearStats)}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
          />
      </Box>
      {/* {yearStats.map(season => {
        return season.PlayerId === playerID && season.Season === 2017 ?
          <Box key={season.GameKey} style={styles.box}>
            <DataGrid
              style={styles.grid}
              rows={sortOutPlayerData(season)}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              />
          </Box>
        :
        null
        }
      )} */}
      {/* {playerData.map(player => {
        return player.PlayerId === playerID ?
        <Box style={styles.box}>
          <DataGrid
            style={styles.grid}
            rows={sortOutPlayerData(player)}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />
        </Box>
        :
        null
        }
      )} */}
    </div>
  );
}

const styles = {
  
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
    position: 'absolute', 
    left: '30%', 
    top: '50%',
    background: 'gray'
  },
  grid: {
    width: '900px',
    color: 'white'
  }
}



export default App;
