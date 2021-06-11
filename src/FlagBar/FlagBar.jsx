import React from 'react';
import Flag from '../Flag/Flag';

const FlagBar = ({ remainingFlags }) => {
    const flagItems = remainingFlags.map(flagItem => 
        <Flag key={flagItem.country} countryFlag={flagItem}/>);

    return (
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'row',flexWrap: 'wrap', maxWidth: '100%', justifyContent: 'center'}}>
            {flagItems}
        </div>
    );
}

export default FlagBar