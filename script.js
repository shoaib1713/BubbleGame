

var timer = 60;
var score = 0;
var randnum = 0;

function generateBubbles(){
    var bubbles = '';
    Math.random();
    for(var i = 0; i<=125; i++){
        var random_number = Math.floor(Math.random()*10);
         bubbles    += `<div class="bubble">${random_number}</div>`;
    }
    document.querySelector('.pbtm').innerHTML = bubbles;
}
function setTimer(){
    var myInterval = setInterval(function(){
        if(timer > 0){
            timer--;
        }else{
            clearInterval(myInterval);
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over your Score is : ${score}</h1>`;

        }
        document.querySelector('#timer').textContent = timer;
    }, 1000);
}
function generateRandomNumber(){
     randnum = Math.floor(Math.random()*10);
    document.querySelector('#randnum').textContent = randnum;
}
function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;   
}
document.querySelector('.pbtm').addEventListener('click',function(details){
    var ClickedNumber = Number(details.target.textContent)
    if(randnum === ClickedNumber){
        increaseScore();
        generateBubbles();
        generateRandomNumber();
    }
})
generateBubbles();
setTimer();
generateRandomNumber();
