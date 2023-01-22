import React from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(){
    
  // State variable for the mole being displayed named displayMole
  //It needs to be ternary based on the assignment
  let displayMole = mole ?<Mole />: <EmptySlot />
  //This will be passed into the return statement so the statement will present either a mole or the empty hill
    return(
        <div style={{'display': 'inline-block', 'width': '15vw', 'margin': '1em'}}>{displayMole}</div>
    )

}

export default MoleContainer