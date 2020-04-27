import React from 'react';
import '../App.css'

const WinMenu = ({setIsPlaying, gameSize}) => {
    return (
        <div className='menu'>
            <h1>Palju õnne!</h1>
            <h2>Suutsid kõik {gameSize} kasti roheliseks muuta</h2>
            <button className='start-button' style={{backgroundColor: '#2eb82e'}}
                    onClick={() => setIsPlaying(false)}>Tagasi avalehele
            </button>
        </div>
    )
};

export default WinMenu;