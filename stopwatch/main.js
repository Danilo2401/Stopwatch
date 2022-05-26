let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let secondsAppend = document.querySelector("#seconds");
let tensAppend = document.querySelector("#tens");
let minutesAppend = document.querySelector("#minutes");
var seconds = 0;
var tens = 0;
var minutes = 0;
var interval;


function StartTime(){
    tens++;

    if (tens < 9) {
        tensAppend.innerHTML = "0" + tens;
    }else if(tens > 9){
        tensAppend.innerHTML = tens;
    }

    if (tens == 99) {
        seconds++;
        secondsAppend.innerHTML = "0" + seconds;
        tens = 0;
        tensAppend.innerHTML = "0" + tens;
    }

    if(seconds < 9){
        secondsAppend.innerHTML = "0" + seconds;
    }else if(seconds > 9){
        secondsAppend.innerHTML = seconds;
    }

    if (seconds == 59) {
        minutes++;
        minutesAppend.innerHTML = "0" + minutes;
        seconds = 0;
        secondsAppend.innerHTML = "0" + seconds;
        tens = 0;
        tensAppend.innerHTML = "0" + tens;
    }

    if (minutes < 9) {
        minutesAppend.innerHTML = "0" + minutes;
    }else if(minutes > 9){
        minutesAppend.innerHTML = minutes;
    }

}

startBtn.addEventListener("click",function(){
    interval = setInterval(StartTime);

})  

stopBtn.addEventListener("click",function(){
     clearInterval(interval);
});

resetBtn.addEventListener("click",function(){
    tens = 0;
    seconds = 0;
    minutes = 0;

    tensAppend.innerHTML = tens + "0";
    secondsAppend.innerHTML = seconds + "0";
    minutesAppend.innerHTML = minutes + "0";

});