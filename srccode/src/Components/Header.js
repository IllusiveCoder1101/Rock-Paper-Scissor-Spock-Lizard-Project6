import React from 'react'
function Header() {

  return (
    <div className='nav'>
        <div className="logo">

        </div>
        <div className="score">
            <p className='title'>SCORE</p>
            <h1 className='value'>{localStorage.getItem("score2")}</h1>
        </div>
    </div>
  )
}

export default Header