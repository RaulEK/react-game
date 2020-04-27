import React, {useState, useEffect, useRef} from 'react';
import './Game.css';
import Piece from './Piece';
import WinMenu from './WinMenu';
import gameController from '../services/game-controller';

const Game = ({gameSize, setIsPlaying}) => {

    const [pieces, setPieces] = useState([{color: 'green', position: [0, 0]}, {
        color: 'red',
        position: [0, 5]
    }, {color: 'red', position: [5, 0]}])
    const [playerPosition, setPlayerPosition] = useState([45, 45]);

    function updatePieces() {
        setPieces(gameController.updateGame([...pieces], [...playerPosition]));
    }

    const handleKeyDown = (event) => {
        const newPlayerPosition = [...playerPosition];
        if (event.keyCode === 37 && newPlayerPosition[0] > 0) {
            newPlayerPosition[0] = newPlayerPosition[0] - 1;
        } else if (event.keyCode === 38 && newPlayerPosition[1] > 0) {
            newPlayerPosition[1] = newPlayerPosition[1] - 1;
        } else if (event.keyCode === 39 && newPlayerPosition[0] < 95) {
            newPlayerPosition[0] = newPlayerPosition[0] + 1;
        } else if (event.keyCode === 40 && newPlayerPosition[1] < 95) {
            newPlayerPosition[1] = newPlayerPosition[1] + 1;
        }
        if (!(gameController.checkOverlap(newPlayerPosition, pieces.map(piece => piece.position), 0))) {
            setPlayerPosition(newPlayerPosition);
        }
        updatePieces();
    }

    useEffect(() => {
        setPieces(gameController.generateStartPositions(gameSize, playerPosition));
    }, [])

    if (pieces.filter(piece => piece.color === 'green').length === parseInt(gameSize)) {
        return (
            <>
                <WinMenu setIsPlaying={setIsPlaying} gameSize={gameSize}/>
            </>
        )
    }
    return (
        <div className='page'>
            <div className='rules'>
                <h3>Eesmärk on muuta kõik punased kastid roheliseks</h3>
                <h3>Kui punane kast puudutab kollast, siis muutub ta roheliseks</h3>
                <h3>Kui roheline kast puudutab punast, siis muutub ta punaseks</h3>
            </div>
            <div className='game'>
                <div className='game-header'>
                    <button className='back-button' style={{backgroundColor: '#ff1a1a'}}
                            onClick={() => setIsPlaying(false)}>Tagasi
                    </button>
                    <h4 style={{marginLeft: '10%'}}>Progress:</h4>
                    <div style={{
                        marginLeft: '2%',
                        backgroundColor: 'green',
                        width: '5%',
                        height: '50%',
                        border: 'solid 1px black'
                    }}/>
                    <h4>{pieces.filter(piece => piece.color === 'green').length}/{gameSize} </h4>
                </div>
                <div className='game-area'>
                    {pieces.map(piece => <Piece key={piece.position} position={piece.position} color={piece.color}/>)}
                    <div tabIndex='0' onKeyDown={handleKeyDown} style={{
                        position: 'absolute',
                        left: playerPosition[0] + '%',
                        top: playerPosition[1] + '%',
                        backgroundColor: 'yellow',
                        width: '5%',
                        height: '5%',
                        border: 'solid 1px black'
                    }}/>
                </div>
            </div>
            <div className='rules'>
                <h3>Kasuta kollase kasti liigutamiseks nooli klaviatuuril</h3>
                <h3>NB! Kui kollane kast ei liigu, siis vajuta tema peale</h3>
                <h3>Edu!</h3>
            </div>
        </div>
    )
};

export default Game;