import React from 'react';

const Square = ({ value, handleSquares }: { value: string | null, handleSquares: React.MouseEventHandler<HTMLButtonElement> }): JSX.Element => {
  return <button className="square" onClick={handleSquares}>{value}</button>
}

export default Square;
