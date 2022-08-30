import React from 'react'
import Header from './Components/Header'
import Game from './Components/Game'
import Footer from './Components/Footer'
import Result from './Components/Result'
import { useGlobalContext } from './Context/flow'

function App() {
  const {page}=useGlobalContext()
  return (
    <>
      <Header/>
      {pageselect(page)}
      <Footer/>
    </>
  )
}
const pageselect=(value)=>{
  if(value==="home"){
    return (
      <div className='firstpage'>
        <Game/>
        
      </div>
    )
  }
  else{
    return(
      <div className='secondpage'>
        <Result/>
      </div>
    )
  }

}

export default App