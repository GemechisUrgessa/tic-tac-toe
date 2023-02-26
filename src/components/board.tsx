import React from 'react';
import Square from './square';

const Board = (): JSX.Element => {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [xTurn, setXTurn] = React.useState(true);

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) {
            return
        }
        const squaresCopy = [...squares];
        if (xTurn) {
            squaresCopy[i] = 'X';
        }
        else {
            squaresCopy[i] = "O";
        }
        setSquares(squaresCopy);
        setXTurn(!xTurn);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xTurn ? "X" : "O");
    }

    function calculateWinner(squares: Array<null | String>) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} handleSquares={() => handleClick(0)} />
                <Square value={squares[1]} handleSquares={() => handleClick(1)} />
                <Square value={squares[2]} handleSquares={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleSquares={() => handleClick(3)} />
                <Square value={squares[4]} handleSquares={() => handleClick(4)} />
                <Square value={squares[5]} handleSquares={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleSquares={() => handleClick(6)} />
                <Square value={squares[7]} handleSquares={() => handleClick(7)} />
                <Square value={squares[8]} handleSquares={() => handleClick(8)} />
            </div>
        </>
    )
}

export default Board;