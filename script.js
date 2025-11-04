var timer = 60;
var score = 0;
var hitrn =0;



function scoreIncrease(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getHit (){
     hitrn = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i<=140; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

function runtTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
        timer --;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clknum = Number(dets.target.textContent);
    if (clknum === hitrn){
        scoreIncrease();
        makeBubble();
        getHit();
    }
});

runtTimer();
makeBubble();
getHit();
