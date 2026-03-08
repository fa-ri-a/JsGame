let userScore = 0;
let compScore = 0 ;

const choices = document.querySelectorAll (".choice");
const msg = document.querySelector("#msg")

const userScorepera = document.querySelector(" #userscore")
const compScorepera = document.querySelector("#compscore")


        //check condition 
        const drawGame = () => {
          msg.innerText = "Game was Draw. Play again.";
          msg.style.backgroundColor = "#081b31";
      
        }
       const gencompchoice = () => {
      
        const option = [ "rock" , " paper" , " scissors"]
        const randomIdx = Math.floor(Math.random() * 3)
         
        return option[randomIdx];

    }  
     
         const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin) { 
       
        userScore ++;
        userScorepera.innerText = userScore;
      msg.innerText = `Congratulation You Win !   ${userChoice} beats ${compChoice}`
      msg.style.background = "green"}
    else {
      
        compScore ++;
        compScorepera.innerText = compScore;
      msg.innerText = ` You Lose Better Luck Next Time ! ${userChoice} beats ${compChoice}`
      msg.style.background = "red"
    }  }

    //comp choice
        const playgame = (userChoice )  => {
        
        const compChoice = gencompchoice() ;
  

        if (userChoice === compChoice) 
            {
           
              drawGame();
            }

        else {   
            let userWin = true ;

                if( userChoice === "rock")  
                 {
                    userWin = compChoice === "paper" ? false : true 
                 }

                else if ( userChoice === "paper")
                {   
                    userWin = compChoice === "scieser" ? false : true

                }
            
                else { 

                userWin = compChoice === "rock" ? false : true  

                }
               
                showWinner(userWin, userChoice, compChoice )
             
                } }
            
                
    //user choice
     

    choices.forEach((choice) => {  

        choice.addEventListener ("click" , () => { 
           
       const userChoice =  choice.getAttribute("id");
          
         playgame(userChoice);

   
      })

    })