import React, {useState} from "react";
import Game from './components/Game';
import './App.css';

export default () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [gameSize, setGameSize] = useState(20);

    return (
        <div style={{backgroundColor: 'gray', height: '100vh'}}>
            {isPlaying ? <Game gameSize={gameSize} setIsPlaying={setIsPlaying}/> :
                <LandingPage setIsPlaying={setIsPlaying} gameSize={gameSize} setGameSize={setGameSize}/>}
        </div>
    )
};

const LandingPage = ({setIsPlaying, gameSize, setGameSize}) => {

    const handleChange = (event) => {
        const value = event.target.value;
        if (value > 100) {
            setGameSize(100)
        } else if (value < 1) {
            setGameSize('')
        } else {
            setGameSize(value)
        }
    }

    return (
        <div className='menu'>
            <h1>Tere tulemast mängu <i>INFECTED</i></h1>
            <h2>Eesmärk on muuta kõik punased kastid rohelisteks</h2>
            <h2>Täpsem info on mängus</h2>
            <div className='input'>
                <h3>Punaste kastide arv (1-100):</h3>
                <input type='number' value={gameSize} onChange={(event) => handleChange(event)}/>
            </div>
            <button className='start-button' style={{backgroundColor: '#2eb82e'}}
                    onClick={() => setIsPlaying(true)}>Alusta
            </button>
        </div>
    )
};