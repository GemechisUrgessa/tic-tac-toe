import React from "react";
import Board from "./board"

const Game = () => {
const [history, setHistory] = React.useState([Array(9).fill(null)]);
const [current, setCurrent] = React.useState(0);
const [xTurn, setXTurn] = React.useState(true);
const squares = history[current];

const handleGame = (prevSquares : Array<null | String>) => {
    const historyCopy = [...history.slice(0 ,current +1), prevSquares];
    setHistory(historyCopy);
    setCurrent(historyCopy.length - 1);
    setXTurn(!xTurn);
}
const jumpTo = (move: number) => {
    setCurrent(move);
    setXTurn(move % 2 === 0);
}
const moves = history.map((squares, move) => {
    let description = ""
    if (move > 0) {
        description = 'Go back to move ' + move;
    }
    else {
        description = 'Go to game start';
    }

    return (
      <li key={move} className="lists">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
})

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xTurn={xTurn} nextMove= {handleGame} squares={squares}/>
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    )
}

export default Game;