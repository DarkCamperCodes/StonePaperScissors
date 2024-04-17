let myscore = document.querySelector(".myactualscore");
let itsscore = document.querySelector(".itsactualscore");
let yourscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let mymove = document.querySelector(".mymove");
let itsmove = document.querySelector(".itsmove");

const gencompchoice = () => {
    const myArray = ["Rock", "Paper", "Scissors"]
    const numcountIdx = Math.floor(Math.random()*3);
    console.log(numcountIdx);
    return myArray[numcountIdx];
}

const drawgame = () => {
    console.log("It's a draw");
    document.querySelector(".declaration").innerText = "It's a Draw";
}

let showWinner = (userWin) => {
    if(userWin == true)
    {
        yourscore++;
        myscore.innerText = yourscore;
        console.log("You Won");
        document.querySelector(".declaration").innerText = "You Won";
    }
    else if(userWin == false){
        compscore++;
        itsscore.innerText = compscore;
        console.log("You Lost");
        document.querySelector(".declaration").innerText = "You Lost";
    }
}
let playgame = (choiceid) => {
    // console.log(choiceid);
    console.log("user choice:", choiceid);
    compchoice = gencompchoice();
    itsmove.innerText = compchoice; 
    console.log("Comp choice:" ,compchoice);
    yourchoice = choiceid;
    mymove.innerText = yourchoice;
    if(yourchoice === compchoice)
    {
        drawgame();
    }
    else
    {
        let userWin = true;
        // if(yourchoice === "rock")
        // {
        //     userWin = compchoice === "paper" ? false : true;
        // }
        // else if(yourchoice === "paper")
        // {
        //     userWin = compchoice === "scissors" ? false : true;
        // }
        // else
        // {
        //     userWin = compchoice === "rock" ? false : true;
        // }
        if(yourchoice == "Rock" && compchoice == "Paper")
        {
            userWin = false;
        }
        else if(yourchoice == "Rock" && compchoice == "Scissors")
        {
            userWin = true
        }
        else if(yourchoice == "Paper" && compchoice == "Rock")
        {
            userWin = true;
        }
        else if(yourchoice == "Paper" && compchoice == "Scissors")
        {
            userWin = false;
        }
        else if(yourchoice == "Scissors" && compchoice == "Rock")
        {
            userWin = false;
        }
        else if(yourchoice == "Scissors" && compchoice == "Paper")
        {
            userWin = true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {   
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
        // console.log(compchoice());
    })
})





// mymove.innerText = yourchoice;








