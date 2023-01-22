import React from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(){
    
  // State variable for the mole being displayed named displayMole
  //It needs to be ternary based on the assignment
  let displayMole = mole ?<Mole />: <EmptySlot />
    return(
        <div style={{'display': 'inline-block', 'width': '15vw', 'margin': '1em'}}>Hi</div>
    )

}

export default MoleContainer