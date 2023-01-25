import React, { useEffect } from 'react'
import moleHillImg from '../molehill.png'

export default function EmptySlot(props) {
  //UseEffect with a callback function.
  useEffect(()=>{
    //Variable, assignment gave for random number
    let randSeconds = Math.ceil(Math.random()*2200)
    //set timer to setTimeout.
    let timer = setTimeout(()=>{
      props.setMoleHill(false)
    }, randSeconds)
  })
  return (
    <div>
      <img style={{'wdith': '30vw'}}
      src={moleHillImg}
      //onClick will refer to MoleContainter
      onClick={props.scoreCount}/>
    </div>
  )
}
