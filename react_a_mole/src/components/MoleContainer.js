import React from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(){
    // This is the useState for the hole whether it is above or below ground.
  let [displayMoleHole, setMoleHole] = useState(false)
  //Function need to handle the score
  function scoreCount(){
    //This has to update the useState in App.js
    props.setScore(props.score+=1)
    //Mole display has to be set to false after it has been clicked.
    setMoleHole(false)
  }
  // State variable for the mole being displayed named displayMole
  //It needs to be ternary based on the assignment
  let displayMole = mole ?<Mole />: <EmptySlot />
  //This will be passed into the return statement so the statement will present either a mole or the empty hill
    return(
        <div style={{'display': 'inline-block', 'width': '15vw', 'margin': '1em'}}>{displayMole}</div>
    )

}

export default MoleContainer