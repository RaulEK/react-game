function checkOverlap(position, positions, nearValue) {
    for (const determinedPosition of positions) {
        if (Math.abs(position[0] - determinedPosition[0]) < 5 + nearValue && Math.abs(position[1] - determinedPosition[1]) < 5 + nearValue) {
            return true;
        }
    }
    return false;
}

function generateStartPositions(gameSize, playerPosition) {
    const pieces = [];
    for (let i = 0; i < gameSize; i++) {
        let position = [Math.floor(Math.random() * 95), Math.floor(Math.random() * 95)];
        while (checkOverlap(position, pieces.map(piece => piece.position).concat([playerPosition]), 0)) {
            position = [Math.floor(Math.random() * 95), Math.floor(Math.random() * 95)];
        }
        const piece = {color: 'red', position: position}
        pieces.push(piece);
    }
    return pieces;
}

function updateGame(pieces, playerPosition) {
    const newPieces = generateNewPositions(pieces, playerPosition)
    newPieces.forEach(firstPiece => {
        newPieces.forEach(secondPiece => {
            if (firstPiece.color !== secondPiece.color) {
                if (checkOverlap(firstPiece.position, [secondPiece.position], 1)) {
                    firstPiece.color = secondPiece.color = 'red';
                }
            }
        });
        if (checkOverlap(firstPiece.position, [playerPosition], 1)) {
            firstPiece.color = 'green';
        }
    })
    return newPieces;
}

function generateNewPositions(pieces, playerPosition) {
    let testSet = pieces.map(piece => piece.position).concat([playerPosition]);
    return pieces.map(piece => {
        let axis = Math.round(Math.random())
        let updatedPosition = [...piece.position];
        testSet = testSet.filter(pos => JSON.stringify(pos) !== JSON.stringify(updatedPosition));
        if (Math.random() < 0.5) {
            if (updatedPosition[axis] < 95) {
                updatedPosition[axis]++;
            }
        } else {
            if (updatedPosition[axis] > 0) {
                updatedPosition[axis]--;
            }
        }
        if (!checkOverlap(updatedPosition, testSet, 0)) {
            testSet.push(updatedPosition);
            return {color: piece.color, position: updatedPosition};
        }
        testSet.push(piece.position);
        return piece;
    })
}

export default {generateNewPositions, generateStartPositions, checkOverlap, updateGame};