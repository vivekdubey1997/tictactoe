import React, {useState} from 'react'
import Icon from './components/Icon'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const array = new Array(9).fill(``)
function App() {

    const [isCross , setChance] = useState(true)
    const [winMessage , setWinMessage] = useState(``)

    const playAgain=()=>{
      array.fill(``)
      setChance(true)
      setWinMessage(``)
    }

    const capitalize=(word)=>{
      return word[0].toUpperCase() + word.slice(1)
    }

    const findWinner=()=>{
    const winLogic = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
    for(let t of winLogic){
     let [a,b,c] = t 
      if(array[a]===array[b] && array[a]===array[c] && array[a] !== ``){
        setWinMessage( capitalize(array[a]) + ` has won the game`)
        console.log(winMessage)
      }
    }
    if(array.indexOf(``) === -1 && winMessage === ``){
      setWinMessage(`Game Draw. Try Again!`)
    }
  }

    const playerTurn =(index)=>{
      if(winMessage !== ``){
        return toast(`Game has been already Over`)
      }

      if(array[index] !== ``){
        return toast('Please Mark Empty Box')
      }
      array[index] = isCross === true ? 'cross' : 'circle'
      setChance(!isCross)
      findWinner()
    }


  return (
    <>
    <ToastContainer position='bottom-center'/>
    <h1 className='heading'> Welcome to Tic Tac Toe</h1>
   {
    winMessage === `` ? 
    (
      <h2>Hey <span>{isCross === true ? `Cross` : `Circle`}</span> Your Turn</h2>
    ) : 
    (
      <div className='msg'>
        <h1>{winMessage}</h1>
        <button type="button" onClick={playAgain} className="btn btn-info">Play Again</button>
      </div>
    )
   }

   <div className="grid">
    {
          array.map((value,index)=>{
            return (
            <div onClick = {()=>playerTurn(index)}>
              <Icon player_icon = {value}></Icon>
            </div>
            )
          })
        }
   </div>
   </>
  );
}

export default App;
