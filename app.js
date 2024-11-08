// // // // // Selection elements
// Mathematical operators
const plus=document.getElementById("plus")
const minus=document.getElementById("minus")
const multip=document.getElementById("multip")
// Rooms of numbers
const oner=document.getElementById("one")
const twor=document.getElementById("two")
const threer=document.getElementById("three")
// span of h1
const h1operation=document.getElementById("mathing") 
const h1x=document.getElementById("eks") 
const h1y=document.getElementById("igrek") 
// Scores of user and computer
const user=document.getElementById("user")
const bot=document.getElementById("computer")
// Count down
const cntDown=document.getElementById("time")
// Answers
const ans1=document.getElementById("box1")
const ans2=document.getElementById("box2")
const ans3=document.getElementById("box3")
const ans4=document.getElementById("box4")
// Difficulty
const easy=document.getElementById("easybtn")
const medium=document.getElementById("mediumbtn")
const hard=document.getElementById("hardbtn")
// Process
const start=document.getElementById("start")
const restart=document.getElementById("restart")
// // // // // // // // // // //

// // // // // All functions
let room=100;
let count=20;
let opera='+'
function operations(x){
    if(x=='+'){
        h1operation.innerHTML="sum";
        plus.classList.add('selected');
        minus.classList.remove('selected');
        multip.classList.remove('selected');
    }else if(x=='-'){
        h1operation.innerHTML="substraction";
        plus.classList.remove('selected');
        minus.classList.add('selected');
        multip.classList.remove('selected');
    }else{
        h1operation.innerHTML="multiplication";
        plus.classList.remove('selected');
        minus.classList.remove('selected');
        multip.classList.add('selected');
    }
}
function rooms(x){
    if(x=='1'){
        room=10
        oner.classList.add('selected');
        twor.classList.remove('selected');
        threer.classList.remove('selected');
    }else if(x=='2'){
        room=100
        oner.classList.remove('selected');
        twor.classList.add('selected');
        threer.classList.remove('selected');
    }else if(x=='3'){
        room=1000
        oner.classList.remove('selected');
        twor.classList.remove('selected');
        threer.classList.add('selected');
    }
}
let userscore=0;
let botscore=0;
let result=33
function userScore(){
    userscore+=1
    user.innerHTML=userscore;
    if(userscore==10){
        user.innerHTML=10;
        winner('user');
    }
}
function botScore(){
    botscore+=1;
    bot.innerHTML=botscore;
    if(botscore==10){
        bot.innerHTML=10;
        winner('bot')
    }
}
ans1.addEventListener("click", ()=>{
    x=ans1.innerHTML;
    if(x==result){
        userScore();
    }else{
        botScore();
    }
    clearInterval(y);
    setInterval(mainFunction(),1000)
})
    
function answer2(){
    x=ans2.innerHTML;
    if(x==result){
        userScore();
    }else{
        botScore();
    }
    clearInterval(y);
    setInterval(mainFunction(),1000)
}
function answer3(){
    x=ans3.innerHTML;
    if(x==result){
        userScore();
    }else{
        botScore();
    }
    clearInterval(y);
    setInterval(mainFunction(),1000)
}
function answer4(){
    x=ans4.innerHTML;
    if(x==result){
        userScore();
    }else{
        botScore();
    }
    clearInterval(y);
    setInterval(mainFunction(),1000)
}
function mainFunction(){
    randNum1=(Math.trunc(Math.random()*room));
    randNum2=(Math.trunc(Math.random()*room));
    h1x.innerHTML=randNum1;
    h1y.innerHTML=randNum2;
    
    if (opera == '+') {
        result = randNum1 + randNum2;
    }
    else if(amal == '-') {
        result = randNum1 - randNum2;
    }
    else if(amal == '*') {
        result = randNum1 * randNum2;
    } 
    ans1.innerHTML = Math.round(Math.random())+1+result;
    ans2.innerHTML = Math.round(Math.random())+2+result;
    ans3.innerHTML = Math.round(Math.random())+3+result;
    ans4.innerHTML = Math.round(Math.random())-1+result;
    timer()
}
function winner(x){
    if(x=='user'){
        alert("Tabriklaymiz! Yutdingiz")
    }else if(x=='bot'){
        alert("Afsuski yutqazib qo'ydingiz!")
    }
}
function timer(){
    let c=count;
    let y=setInterval(function(){
        cntDown.innerHTML=c;
        c-=1;
        if(c==0){
            clearInterval(y);
            mainFunction();
            botScore();
        }
    },1000);

}
function resetFN(){
    window.location.href= "./index.html";
}
















