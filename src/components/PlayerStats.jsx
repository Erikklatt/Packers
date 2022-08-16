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
import { columns, columnsTotals } from '../cleanup';


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

        yearStats.forEach((game) => {
            if(game.PlayerId === playerID && game.Season === seasonStats){
            row.push({
              id: game.GameKey,
              game: game.GameKey,
              season: game.Season,
              team: game.HomeAbbr + ' vs ' + game.AwayAbbr,
              qbAttempts: game.QBAttempts,
              qbCompletions: game.QBCompletions,
              qbYards: game.QBYards,
              qbInterceptions: game.QBInterceptions,
              qbRating: game.QBRating,
              recReceptions: game.RecReceptions,
              recYards: game.RecYards,
              recLong: game.RecLong,
              recLongTDReception: game.RecLongTDReception,
              recTouchdowns: game.RecTouchdowns,
              recTwoPointAttempts: game.RecTwoPointAttempts,
              recTwoPointConversions: game.RecTwoPointConversions,
              recPassTarget: game.RecPassTarget,
              recYAC: game.RecYAC,
              rusAttempts: game.RusAttempts,
              rusYards: game.RusYards,
              rusLong: game.RusLong,
              rusLongTDRush: game.RusLongTDRush,
              rusTouchdowns: game.RusTouchdowns,
              rusTwoPointAttempts: game.RusTwoPointAttempts,
              rusTwoPointConversions: game.RusTwoPointConversions,
              rusYAC: game.RusYAC,
            })
          } 
        })
        if(seasonStats === 'Total'){
            row.push({
                id: yearStats.GameKey + 1,
                qbAttempts: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.QBAttempts) , 0 ),
                qbCompletions: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.QBCompletions) , 0 ),
                qbYards: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.QBYards) , 0 ),
                qbInterceptions: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.QBInterceptions) , 0 ),
                recReceptions: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecReceptions) , 0 ),
                recYards: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecYards) , 0 ),
                recTouchdowns: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecTouchdowns) , 0 ),
                recTwoPointAttempts: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecTwoPointAttempts) , 0 ),
                recTwoPointConversions: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecTwoPointConversions) , 0 ),
                recPassTarget: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecPassTarget) , 0 ),
                recYAC: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RecYAC) , 0 ),
                rusAttempts: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RusAttempts) , 0 ),
                rusYards: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RusYards) , 0 ),
                rusTouchdowns: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RusTouchdowns) , 0 ),
                rusTwoPointAttempts: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RusTwoPointAttempts) , 0 ),
                rusTwoPointConversions: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RusTwoPointConversions) , 0 ),
                rusYAC: yearStats.filter((player) => player.PlayerId === playerID).reduce((a,v) =>  a = a + Number(v?.RusYAC) , 0 ),
              })
        }
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
                <MenuItem value={'Total'}>Career Total</MenuItem>
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
              columns={seasonStats === 'Total' ? columnsTotals : columns}
              pageSize={15}
              rowsPerPageOptions={[15]}
              disableSelectionOnClick
            //   MUI Offers pinning of columns in their pro tier,
            //   I would have liked to have done that here with the first few columns to better view the game stats
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
        width: '200px',
        color: 'white',
        backgroundColor: '#565656',
        borderColor: 'red'
    },
    box: {
        height: '400px',
        background: '#565656'
    },
    grid: {
        width: '60vw',
        color: 'white'
    }
}