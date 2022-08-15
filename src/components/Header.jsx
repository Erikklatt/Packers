import Players from '../players.json';
import '../App.css';
import { Tabs, Tab } from '@mui/material';
import React from 'react';
import packersLogo from "../static/packersLogo.png";

export const Header = (props) => {
    const {
        handleChange,
        value
    } = props;
    return (
        <header className="App-header">
        <div style={styles.headerWrapper}>
            <img style={{width: '80px', height: '65px', margin: '8px 0 0 8px'}} alt='' src={packersLogo} />
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
            <img style={{width: '80px', height: '65px', margin: '8px 8px 0 0'}} alt='' src={packersLogo} />
        </div>
        </header>
    );
}

const styles = {
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tab: {
      padding: '2px 34px',
      width: '140px',
      height: '72px',
      color: 'white',
      backgroundColor: '#203731',
  },
}
