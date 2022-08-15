import YearStats from '../yearstats.json'
import '../App.css';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../cleanup';


export const PlayerStats = (props) => {
    const {
        playerID
    } = props;
    const [seasonStats, setSeasonStats] = React.useState(2021);
    const handleSeasonChange = (event) => {
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
        <>
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
                {/* I would have liked to loop through here and grab the year from the players data, and create a MenuItem for each row */}
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
            //   MUI Offers pinning of columns in their pro tier,
            //   I would like to have done that here with the first few columns to better view the game stats
            //   EX: initialState={{
            //         pinnedColumns: { left: ['GameKey'] },
            //     }}
            />
          </Box>
        </>
    );
}

const styles = {
    dropDown: {
        outline: 'red',
        color: 'white',
        backgroundColor: '#565656',
        borderColor: 'red'
    },
    box: {
        height: '400px',
        background: '#565656'
    },
    grid: {
        width: '50vw',
        color: 'white'
    }
}