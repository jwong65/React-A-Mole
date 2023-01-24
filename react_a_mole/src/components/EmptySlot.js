import React, { useEffect } from 'react'

export default function EmptySlot() {
  //UseEffect with a callback function.
  useEffect(()=>{
    //Variable, assignment gave for random number
    let randSeconds = Math.ceil(Math.random()*5000)
    //set timer to setTimeout.
    let timer = setTimeout(()=>{
      props.setMoleHill(false)
    }, randSeconds)
  })
  return (
    <div>EmptySlot</div>
  )
}
