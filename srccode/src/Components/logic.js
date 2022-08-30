

function Logic(human,comp) {
    if (human===0){
        if(comp===0){
            return "DRAW"
        }
        if(comp===1){
            
            return "YOU LOSE"
        }
        if(comp===2){
            
            return "YOU WIN"
        }
        if(comp===3){
            
            return "YOU WIN"
        }
        if(comp===4){
            
            return "YOU LOSE"
        }
    } 
    if (human===1){
        if(comp===0){
            
            return "YOU WIN"
        }
        if(comp===1){
            return "DRAW"
        }
        if(comp===2){
            
            return "YOU LOSE"
        }
        if(comp===3){
            
            return "YOU LOSE"
        }
        if(comp===4){
            
            return "YOU WIN"
        }
    } 
    if (human===2){
        if(comp===0){
            
            return "YOU LOSE"
        }
        if(comp===1){
            
            return "YOU WIN"
        }
        if(comp===2){
            return"DRAW"
        }
        if(comp===3){
            
            return "YOU WIN"
        }
        if(comp===4){
            
            return "YOU LOSE"
        }
    } 
    if (human===3){
        if(comp===0){
            
            return "YOU LOSE"
        }
        if(comp===1){
            
            return "YOU WIN"
        }
        if(comp===2){
            
            return "YOU LOSE"
        }
        if(comp===3){
            return "DRAW"
        }
        if(comp===4){
            
            return "YOU WIN"
        }
    } 
    if (human===4){
        if(comp===0){
            
            return "YOU WIN"
        }
        if(comp===1){
            
            return "YOU LOSE"
        }
        if(comp===2){
            
            return "YOU WIN"
        }
        if(comp===3){
            
            return "YOU LOSE"
        }
        if(comp===4){
            return "DRAW"
        }
    } 
}

export default Logic