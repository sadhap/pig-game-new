'use strict';

//selecting elements


const score0El = document.getElementById('score--0');//score : 
const score1El = document.getElementById('score--1');//score : 
const current0El = document.getElementById('current--0');//current score 
const current1El = document.getElementById('current--1');//current score 
const diceEl = document.getElementById('dice');//img tag dise
const btnNew = document.getElementById('btn--new');///restart the game
const btnRoll = document.getElementById('btn--roll');//spin the dise
const btnHold = document.getElementById('btn--hold');//hold the value
const player1El = document.getElementById('player--0');//player1 container
const player2El = document.getElementById('player--1');//player2 container
const winName = document.getElementById('winner-name');
const name1El = document.getElementById('name--1');
const name2El = document.getElementById('name--2');
const emojiEl = document.getElementById('emoji');
// create global variable
let scores,currentScore,activePlayer,isPlaying,dice;

//functions
const init = function(){
    //this is initial values.....
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
    //this is initial score UI content 
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current0El.textContent = 0;
    //initial styles`
    diceEl.classList.remove('hidden');
    player1El.classList.add('player--active');
    player2El.classList.remove('player--active');
    btnRoll.classList.remove('hidden');
    btnHold.classList.remove('hidden');
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    winName.classList.add('hidden');
    name1El.innerText = "👱Player 1";
    name2El.innerText = "👱Player 2";
    emojiEl.classList.add('hidden');
    current0El.innerText = 0;
    current1El.innerText = 0;

};
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent =0;
    currentScore=0;
    activePlayer =activePlayer === 0 ? 1:0;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
    diceEl.classList.add('out');
    // diceEl.classList.remove('out');
};

//EventListeners
btnRoll.addEventListener('click',()=>{
    //generate random roll
if(isPlaying){
 
    dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);
    //display dice in UI
    diceEl.classList.remove('hidden');
    diceEl.classList.remove('out');
    diceEl.src=`./images/dice-${dice}.png`
    if(dice!== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
       
    }else{

        //change player
        switchPlayer();
    }

    }
    
});
btnHold.addEventListener('click',()=>
{
    scores[activePlayer]+= currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
 
    //select the winner
    if(scores[activePlayer]>=10){
        diceEl.classList.add('hidden');
        document.getElementById(`player--${activePlayer}`).classList.add('player--winner');
        document.getElementById(`player--${activePlayer}`).classList.remove('player--active');
        // document.getElementById(`player--${activePlayer}`).classList.add('hidden');
         
         
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
        winName.classList.remove('hidden');
        winName.classList.add('winName')
        winName.innerText = activePlayer === 0 ? "Player ☝ won the match":"Player ✌ won the match";
        name1El.innerText = activePlayer ===0 ? "😍Player 1":"😭player 1";
        name2El.innerText = activePlayer === 0 ? "😭player 2":"😍player 2";
        emojiEl.classList.remove('hidden');
    

    }else{
        switchPlayer();
        diceEl.classList.remove('out');
    
    }

});
btnNew.addEventListener('click',()=>{
init();
});
init();



//Initial settings