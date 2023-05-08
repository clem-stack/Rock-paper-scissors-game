const overlay = document.querySelector('.overlay');
const iconClose = document.querySelector('.iconclose');
const rulesSection = document.querySelector('.rulessection');
const rulesBtn = document.querySelector('.rulesbtn');

rulesBtn.addEventListener('click', ()=>{
    rulesSection.classList.add('active');
    overlay.classList.add('active');
})

iconClose.addEventListener('click', ()=>{
    rulesSection.classList.remove('active');
    overlay.classList.remove('active');
})


// create a dictionary for key value
const handOptions = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
}
let SCORE = 0;

const chooseHand = (hand) =>{

    // when clicked, hide the current console
    let virtualSection = document.querySelector('.virtualsection');
    virtualSection.style.display = "none"

    // show the result
    let result = document.querySelector('.result');
    result.style.display = "flex";

    // set the user pick
    document.getElementById('yourpickedhand').src = handOptions[hand];

    let computerHand = computerChoose();
    judge(hand, computerHand)
}

const computerChoose = () =>{
    let virtualSection = ["rock", "paper", "scissors"];
    let computerHand = virtualSection[Math.floor(Math.random() * 3)];

    // set the cpu pick
    document.getElementById('computerpickedhand').src = handOptions[computerHand];

    return computerHand;
}

const judge = (chooseHand, computerChoose) =>{
    if (chooseHand == "rock" && computerChoose == "paper"){
        setDecision("YOU LOSE");
        setScore(SCORE - 1);
    }
    if(chooseHand == "rock" && computerChoose == "scissors"){
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if(chooseHand == "rock" && computerChoose == "rock"){
        setDecision("IT's A TIE");
    }
    if(chooseHand == "paper" && computerChoose == "rock"){
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if (chooseHand == "paper" && computerChoose == "scissors") {
        setDecision("YOU LOSE");
        setScore(SCORE - 1);
    }
    if (chooseHand == "paper" && computerChoose == "paper") {
        setDecision("IT's A TIE");
    }
    if (chooseHand == "scissors" && computerChoose == "paper") {
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if (chooseHand == "scissors" && computerChoose == "rock"){
        setDecision("YOU LOSE");
        setScore(SCORE - 1);
    }
    if (chooseHand == "scissors" && computerChoose == "scissors"){
        setDecision("IT's A TIE");
    }
}

const restart = () =>{
     // when clicked, hide the current console
    let virtualSection = document.querySelector('.virtualsection');
    virtualSection.style.display = "flex"

    // show the result
    let result = document.querySelector('.result');
    result.style.display = "none";
}

const setDecision = (decision) =>{
    document.querySelector('.verdict h1').innerText = decision;
}

const setScore = (score) =>{
    if (setScore === 0) return;
    SCORE = score;
    document.querySelector('.score h1').innerText = score;
}