import React from 'react'
import { useState } from 'react'
import MoleImg from '../mole.png'

export default function Mole() {
  useEffect(()=>{
    //Variable, assignment gave for random number
    let randSeconds = Math.ceil(Math.random()*2200)
    //set timer to setTimeout.
    let timer = setTimeout(()=>{
      props.setMoleHill(false)
    }, randSeconds)
    return ()=> clearTimeout(timer)
  })
  return (
    
    <div>
      <img
      src={MoleImg}
      onClick={props.scoreCount} 
      />
    </div>
  )
}
