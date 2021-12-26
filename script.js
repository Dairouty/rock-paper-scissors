
document.getElementById('submit').addEventListener('click', x)
let i = 0
let j = 0
let userName;
function x(){
   userName = document.getElementById('text').value;
if (userName === ""){
    document.getElementById("demo").innerHTML = "Please, enter your name!"
} else if (!isNaN(userName)){
    document.getElementById("demo").innerHTML = "Please, enter a valid name!"
}

else {
    userName = userName.toUpperCase();
    document.getElementById('rock').src = "rock.png"
    document.getElementById('rock').width ="120"
    document.getElementById('rock').height ="120"
    document.getElementById('paper').src = "paper.jpg";
    document.getElementById('paper').width ="120"
    document.getElementById('paper').height ="120"
    document.getElementById('scissors').src = "scissors.jpg";
    document.getElementById('scissors').width ="120"
    document.getElementById('scissors').height ="120"

    document.getElementById('user').innerHTML = `${userName}: ${i}`
    document.getElementById('computer').innerHTML = `Computer: ${j}`
    document.getElementById('user').style.fontSize = '28px'
    document.getElementById('computer').style.fontSize = '28px'
    document.getElementById('rock').style.visibility = "visible";
    document.getElementById('paper').style.visibility = "visible";
    document.getElementById('scissors').style.visibility = "visible";
    const foorm = document.getElementById('form');
    const newForm = document.createElement('p');
    newForm.innerHTML = `Hi ${userName}, let the game begin`
    foorm.parentNode.replaceChild(newForm, foorm);
    newForm.style.color = 'gold'
    newForm.style.fontSize = 'xx-large'
    newForm.style.fontStyle = 'italic'
    newForm.style.fontWeight = 'bolder'
}
}







document.getElementById('rock').addEventListener('click', rock)

document.getElementById('rock').addEventListener('click',game)

document.getElementById('paper').addEventListener('click', paper)

document.getElementById('paper').addEventListener('click',game)
   
document.getElementById('scissors').addEventListener('click', scissors)

document.getElementById('scissors').addEventListener('click',game)
const choices = ['rock', 'paper', 'scissors'];
 
function paper(){
    
    return playerSelection ='paper'
};
function rock(){
    
    return playerSelection = 'rock' 
};
function scissors(){
    
    return playerSelection ='scissors'
};

function game(){
    let name = userName;
    let playerScore = 1
    let computerScore = 1

    function computerPlay(){
        return choices[Math.floor(Math.random()*choices.length)]
     }
     let computerSelection = computerPlay(choices);
     
     
    
    if (playerSelection === computerSelection){
        document.getElementById('msg').innerHTML = `${playerSelection} ties with ${computerSelection}`
    }
    else if ((playerSelection === 'scissors' && computerSelection === "paper")  || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === 'paper' && computerSelection === 'rock')){
        document.getElementById('msg').innerHTML = `you won, ${playerSelection} beats ${computerSelection}`
       i+=playerScore
        document.getElementById('user').innerHTML = `${name} : ${i}`
        console.log(i)
    } else {
       j+=computerScore
        document.getElementById('computer').innerHTML = `computer : ${j}`
        document.getElementById('msg').innerHTML = `you loose, ${computerSelection} beats ${playerSelection}`
    } 
    function winner(){
        if (i === 5){
            document.getElementById('body').innerHTML = ("You Won<br>")
            let newBtn = document.createElement('button')
            newBtn.innerHTML  = 'Click here to <br>Play another round'
            newBtn.style.backgroundColor = "red"
            document.body.appendChild(newBtn);
            document.getElementById('body').style.fontSize = '150px'
            newBtn.style.fontSize = '100px'
            newBtn.addEventListener('click', reload => {
                window.location.reload();
            })
        } else if (j === 5){
            document.getElementById('body').innerHTML = ("Game over <br>");
            document.getElementById('body').style.fontSize = '150px'
            let newBtn = document.createElement('button')
            newBtn.innerHTML  = 'Click here to <br>Play another round'
            newBtn.style.backgroundColor = "red"
            document.body.appendChild(newBtn);
            document.getElementById('body').style.fontSize = '150px'
            newBtn.style.fontSize = '100px'
            newBtn.addEventListener('click', reload => {
                window.location.reload();
            })

        }
    }
    return winner();
    
}
