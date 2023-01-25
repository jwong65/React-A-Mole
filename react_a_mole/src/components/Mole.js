import React from 'react'
import { useEffect } from 'react'
import MoleImg from '../mole.png'

export default function Mole(props) {
  useEffect(()=>{
    //Variable, assignment gave for random number
    let randSeconds = Math.ceil(Math.random()*2200)
    //set timer to setTimeout.
    let timer = setTimeout(()=>{
      props.toggle(false)
    }, randSeconds)
    return ()=> clearTimeout(timer)
  })
  return (
    
    <div>
      <img src={MoleImg}/>
    </div>
  )
}
