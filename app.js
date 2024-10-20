let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let highestlevel=0;

let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");
let p=document.querySelector("p");
let btn=document.querySelector(".btn");

let start=document.querySelector(".start-button");

start.addEventListener("click",function(){
    if(start.innerText=="restart"){
        start.innerText="start";
        reset();
    }else{
        start.innerText="restart";
    }
    p.innerText="Game is started...";

    if(started==false){
        console.log("game is started...");
        started=true;
        levelUp();

    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userbtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    //random button is choosed
    gameFlash(randbtn);
}

function btnPress(){
    let btn= this;
    userbtnFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        highestlevel=(highestlevel<level)?level:highestlevel;
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Your Highest Score was <b>${highestlevel}</b> <br> Please restart the game...`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="antiquewhite";
        },150);
        reset();
    }
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    if(start.innerText=="restart"){
        start.innerText="start";
        reset();
    }else{
        start.innerText="restart";
    }
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}