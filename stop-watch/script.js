const startStopBtn =document.querySelector("#startStopBtn");
const resetBtn =document.querySelector("#resetBtn");
const  displayTimer=document.querySelector("#timer");

//variables for timer values

let seconds=0;
let minutes =0;
let hours =0;
//variables for leading zero
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;
//variables for set interval and timer status
let timerInterval=null;
let timerStatus="stopped";
//stop watch function

let stopWatch =()=>{
seconds++;
if(seconds/60===1){
    seconds=0;
    minutes++;
}
if(minutes/60===1){
minutes=0;
hours++;
}
if(seconds<10){
    leadingSeconds="0"+seconds.toString();
}else{
    leadingSeconds=seconds;
}
if(minutes<10){
    leadingMinutes="0"+minutes.toString();
}else{
    leadingMinutes=minutes;
}

if(hours<10){
    leadingHours="0"+hours.toString();
}else{
    leadingHours=hours;
}

 displayTimer.innerText=
leadingHours+ ":"+leadingMinutes+":"+leadingSeconds;
};

startStopBtn.addEventListener("click",()=>{
    if(timerStatus==="stopped"){
        timerInterval=window.setInterval(stopWatch,1000);
       startStopBtn.innerHTML="<i class='fa-solid fa-pause' id='pause'></i>";
       timerStatus="started";
    }else{
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML="<i class='fa-solid fa-play' id='play'></i>"
        timerStatus="stopped";
    }
})

resetBtn.addEventListener("click",()=>{
    window.clearInterval(timerInterval);
    seconds=0;
    minutes=0;
    hours=0;
    displayTimer.innerHTML="00:00:00";
})





