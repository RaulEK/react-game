import React, {useState, useEffect} from "react";
import Game from './components/Game';
import './App.css';

export default () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [gameSize, setGameSize] = useState(20);

    return (
        // <Example/>
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
            <h2>Sinu eesmärk on muuta kõik punased kastid rohelisteks</h2>
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

const Example = () => {

    const [counter, setCounter] = useState(1);

    function handleKeyDown(event) {
        console.log(counter, 'button was pressed')
        setCounter(counter + 1)
        console.log(counter, 'counter was updated')
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (
        <>
            <h1 onKeyDown={handleKeyDown}>{counter}</h1>
            <button onClick={handleKeyDown}>Testi</button>
        </>
    )
}
