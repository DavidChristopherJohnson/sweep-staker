import React from 'react';

const Flag = ({ countryFlag, click }) => {
    return (
        <div style={{display: 'flex', alignSelf: 'center', flexDirection: 'column', width: 100, height: 100, alignItems: 'center'}} onClick={click}>
            <img style={{maxWidth: 100, maxHeight: 50}} src={countryFlag.src} alt={countryFlag.country}/>
            <br />
            <span>{countryFlag.country}</span>
        </div>
    );
};

export default Flag;