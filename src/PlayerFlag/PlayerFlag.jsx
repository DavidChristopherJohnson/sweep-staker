import React from 'react';
import Flag from '../Flag/Flag';

const PlayerFlag = ({flagItem}) => {
    return <div style={{flexDirection: 'row', justifyItems: 'center'}}>
        <Flag countryFlag={flagItem.flag}/>
        <br />
        <span>{flagItem.player}</span>
    </div>
}
export default PlayerFlag