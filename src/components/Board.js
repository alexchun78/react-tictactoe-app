
import Square from './Square';
import './Board.css';

const Board = ({squares, onClick})=>{
 
  //const [squares, setSquares] = useState(Array(9).fill(null));
 // const [xIsNext, setXIsNext] = useState(true);
 // const status = `Next Player : ${xIsNext? 'X':'O'}`;  

  // const calculateWinner = (squares) => {
  //   const lines = [ 
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8],
  //     [0,3,6],
  //     [1,4,7],
  //     [2,5,8],
  //     [0,4,8],
  //     [2,4,6],
  //   ];
  //   for(let i =0; i<lines.length; i++) {
  //     const [a,b,c] = lines[i];
  //     if(squares[a] === squares[b] && squares[a] === squares[c]){
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // };

  // const handleClick= (i)=> {
  //   const squares_new = squares.slice();
  //   if(calculateWinner(squares_new) || squares_new[i]){
  //     return;
  //   }
  //   squares_new[i] = xIsNext? 'X':'O';
  //   setSquares(squares_new);    
  //   setXIsNext(current => !current)
  // };

  const renderSquare = (i)=>{    
    return <Square 
                  value={squares[i]}
                  onClick={()=>
                    onClick(i)
                  }/>;
  };

  return (
    <>
      <div className='board-wrapper'>
        {/* <div className="status"> </div> */}
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}          
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}          
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}          
        </div>
      </div>
    </>
  );
}



export default Board;