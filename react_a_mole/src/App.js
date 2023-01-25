import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  // Usestate with the default score being 0
  let [score, setScore] = useState(0)

  ///default positions
  const createPosition= ()=>{
    //Empty array but the molecontainer has to be pushed into it.
    let hill = []
    for (let i=0; i<10; i++){
      hill.push(<MoleContainer score={score} setScore={setScore}/>)
    }
    return(
      <div>
        {hill}
      </div>
    )

  }
  return (
  <>
  {/* This is the state for score. */}
    {score}
    {/* This is the result of the function that generated the hills */}
    {createPosition()}
  </>
  );
}

export default App;
