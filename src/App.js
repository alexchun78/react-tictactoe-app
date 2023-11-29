import React, {
  useState
} from 'react';
import './App.css';
import Board from './components/Board';

function App() {

  const [history, setHistory] = useState([
    { squares : Array(9).fill(null)}
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  //const current = history[history.length -1];
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if(winner){
    console.log(winner);
    status = 'Winner : '+ winner;
  } else {
    status = `Next Player : ${xIsNext? 'X':'O'}`;  
  }

  const handleClick= (i)=> {
    //const squares_new = current.squares.slice();
    const newHistory = history.slice(0,stepNumber + 1);
    const newCurrent = newHistory[newHistory.length -1];
    const squares_new = newCurrent.squares.slice();

    if(calculateWinner(squares_new) || squares_new[i]){
      return;
    }
    squares_new[i] = xIsNext? 'X':'O';
    setHistory([...newHistory,{squares:squares_new}]);    
    setXIsNext(current => !current);

    setStepNumber(newHistory.length);
  };

  function calculateWinner(squares){
    const lines = [ 
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i =0; i<lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  };

  const jumpTo = (step)=>{
    setStepNumber(step);
    setXIsNext((step%2)===0);
    console.log(step)
    setHistory(history.slice(0,step+1))
    console.log(history.length);
  };

  const moves = history.map((step,move)=>{
    const desc = move ? 'Go to move #'+move : 'Go to move start';
    return (
      <li key={move}>
        <button className='move-btn' onClick={()=>jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares}
               onClick={(i)=>handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
