import React from 'react';

const Piece = ({position, color}) => {

    const style = {
        position: 'absolute',
        left: position[0] + '%',
        top: position[1] + '%',
        backgroundColor: color,
        width: '5%',
        height: '5%',
        border: 'solid 1px black'
    }

    return (
        <div style={style}/>
    )
};

export default Piece;