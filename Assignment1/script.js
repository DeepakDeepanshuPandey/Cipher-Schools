
let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;


let interval = null;


let status = "stopped";

function stopWatch(){

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

    }

     if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;

}



function start(){

    if(status === "stopped"){

        
        interval = window.setInterval(stopWatch, 1000);
        
        status = "started";

    }

}
function stop()
{
  if(status === "started")
  {
      window.clearInterval(interval);
      status = "stopped";
  }
}

function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00";
    status = "stopped";
    

}