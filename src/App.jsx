import { useState } from "react"

function Square({value, onSquareClick}){
  return <button style={{color:"blue"}} onClick={onSquareClick} className="square">
    {value}
    </button>
}

export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "winner " + winner
  } else{
    status = "Next player" + (xIsNext ? "X" : "O");
  }
  function handleclick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
       nextSquares[i] = "X";
    }else{
       nextSquares[i] = "O";
    }
   
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
    
  }

  return(
    <>
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        <Square  onSquareClick={()=>handleclick(0)} value={squares[0]}/>
        <Square onSquareClick={()=>handleclick(1)} value={squares[1]}/>
        <Square onSquareClick={()=>handleclick(2)} value={squares[2]}/>
      </div>

      <div className="board-row">
        <Square onSquareClick={()=>handleclick(3)} value={squares[3]}/>
        <Square onSquareClick={()=>handleclick(4)} value={squares[4]}/>
        <Square onSquareClick={()=>handleclick(5)} value={squares[5]}/>
      </div>

      <div className="board-row">
        <Square onSquareClick={()=>handleclick(6)} value={squares[6]}/>
        <Square onSquareClick={()=>handleclick(7)} value={squares[7]}/>
        <Square onSquareClick={()=>handleclick(8)} value={squares[8]}/>
      </div>
      
    </>
  )
  
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
