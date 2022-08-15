import { Avatar, Stack } from "@mui/material";
import aaronJones from "../static/AaronJones.jpg";
import aaronRodgers from "../static/AaronRodgers.jpg";
import ajDillon from "../static/AjDillon.jpg";
import randallCobb from "../static/RandallCobb.jpg";
import sammyWatkins from "../static/SammyWatkins.jpg";

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

export const PlayerInfo = (props) => {
    const {
        playerID,
        viewingPlayer
    } = props;
    return (
        <>
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
                <div>{viewingPlayer.PlayerName || ''}</div>
                <a style={{color: '#FFB612'}} href="https://www.packers.com/" target="_blank" rel="noreferrer"><div>{viewingPlayer.TeamName + ', ' + viewingPlayer.TeamAbbreviation  || ''}</div></a>
                <div>{viewingPlayer.Wgt || ''}</div>
                <div>{viewingPlayer.PositionId || ''}</div>
            </Stack>
            </div>
        </>
    );
}

const styles = {
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
  }