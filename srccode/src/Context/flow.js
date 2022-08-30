import React, { useState } from 'react'

const AppContext=React.createContext()

function AppProvider({children}) {
    const [picked,setPicked]=useState(0)
    const [page,setPage]=useState("home")
    const pick=(value)=>{
        setPicked(value)
    }
    const computer=()=>{
        return Math.floor(Math.random()*4)
    }
    
    const getValue=()=>{
        return localStorage.getItem("score")
    }
    const changepage=(value)=>{
        setPage(value)
    }
    return(
        <AppContext.Provider value={{picked,pick,computer,page,changepage,getValue}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return React.useContext(AppContext)
}

export {AppContext,AppProvider}