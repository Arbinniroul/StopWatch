let[mseconds,seconds,minutes]=[0,0,0];
let timer=null;
let displayTime=document.getElementById("displayTime");
let click=document.getElementById("click");
function stopwatch(){
    ++mseconds;
click.src="images/pause1.png"
 if(mseconds==60){
        let mseconds=0;
        seconds++;
        if(seconds==60){
            let seconds=0;
            minutes++;
        }}
    


    let h=minutes<10?"0"+minutes:minutes;
    let m=seconds<10?"0"+seconds:seconds;
    let s=mseconds<10?"0"+mseconds:mseconds;
    displayTime.innerHTML=h+":"+m+":"+s;
    }
function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
  timer=setInterval(stopwatch,1000);
}
function watchStop(){
   click.src="images/start.png";
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [mseconds,seconds,minutes]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}