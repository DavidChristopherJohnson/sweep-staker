import './App.css';
import FlagBar from './FlagBar/FlagBar';
import { flags as countryFlags } from './data/flagsJson';
import players from './data/playerJson';

import { useState } from 'react';
import PlayerFlag from './PlayerFlag/PlayerFlag';

function App() {
  const [remainingFlags, setRemainingFlags] = useState([...countryFlags]);
  const [remainingPlayers, setRemainingPlayers] = useState([...players]);
  const [selected, setSelected] = useState([]);
  const [lastSelected, setLastSelected] = useState();

  const selectFlag = () => {
    const tempArray = remainingFlags;
    const tempPlayers = remainingPlayers;
    const tempSelected = selected;
    const randomFlagIndex = Math.floor(Math.random() * tempArray.length)
    const randomFlag = tempArray.splice(randomFlagIndex, 1)[0];

    const randomPlayerIndex = Math.floor(Math.random() * tempPlayers.length);
    const randomPlayer = tempPlayers.splice(randomPlayerIndex, 1)[0]; 

    setRemainingFlags([...tempArray]);
    setRemainingPlayers([...tempPlayers]);

    console.log("Random Flag: ", randomFlag);
    console.log("Random Player:", randomPlayer);
    console.log("Remaining Flags: ", tempArray.length);
    console.log("Remaining Players: ", tempPlayers.length);

    const selectedFlag = {
      flag: randomFlag,
      player: randomPlayer ?? 'Charity'
    };

    setLastSelected(selectedFlag);
   
    tempSelected.push(selectedFlag);
    setSelected(tempSelected);
  }

  return (
    <div className="App" style={{flexDirection: 'column', display: 'flex'}}>
      <div style={{minHeight: 200, flexDirection: 'row', display: 'flex'}}>
        <FlagBar remainingFlags={remainingFlags} />
      </div>
      <br />
      <div style={{minHeight: 100, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {remainingPlayers.map(player => <span style={{ display: 'flex', fontSize: 20, padding: 5, marginBottom: 5, marginRight: 10, borderWidth: 1, borderStyle: 'dashed', borderColor: 'black'}}>{player}</span>)}
      </div>
      <br />
      <div style={{display: 'flex', minHeight: 150, flexDirection: 'column', alignItems: 'center'}}>
         {lastSelected && <PlayerFlag flagItem={lastSelected} />}
      </div>
      <br />
      <div style={{minHeight: 75}}>
        {remainingFlags.length > 0 ?
          <button style={{fontSize: 24}} onClick={selectFlag}>Make Selection</button> : ''}
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
        {
          selected.map((flagItem) =>
          <div style={{display: 'flex', borderWidth: 1, padding: 5, borderStyle: 'dashed', flexDirection: 'column', alignItems: 'center', 
          marginRight: 10, marginBottom: 10}}>
            <PlayerFlag flagItem={flagItem} />
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
