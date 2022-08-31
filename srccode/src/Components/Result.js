import React from 'react'
import Logo from './Logo'
import { useGlobalContext } from '../Context/flow'
import Logic from './logic'
function Result() {
  const {computer,picked,changepage}=useGlobalContext()
  const value=computer()
  const tmp=Logic(picked,value)
  if(tmp==="YOU WIN"){
    if(localStorage.getItem("score2"))
      localStorage.setItem("score2",parseInt((localStorage.getItem("score2")))+1)
      
      
    else
      localStorage.setItem("score2",1)
  }
  else if(tmp==="YOU LOSE"){
    if(parseInt(localStorage.getItem("score2"))===0){
      localStorage.setItem("score2","0")
    }
    else{
      if(localStorage.getItem("score2"))
        localStorage.setItem("score2",parseInt((localStorage.getItem("score2")))-1)
        
        
      else
        localStorage.setItem("score2",0)
    }
  }
  return (
    <>
      <div className='res'>
          <div className="human">
              <h1 className='pic'>{Logo(picked)}</h1>
              <h1 className='you'>YOU PICKED</h1>
          </div>
          <div className="Computer">
              <h1 className='pic'>{Logo(value)}</h1>
              <h1 className='you'>MOUSE PICKED</h1>
          </div>

      </div>
      {<div className='message'>
        <h1 className="msg">{tmp}</h1>
        <button onClick={()=>changepage("home")} className="playagain">PLAY AGAIN</button>
      </div>}
    </>
  )
}

export default Result