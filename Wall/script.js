var c=0;
var t=3;
// c=count t=time

function update(){
document.getElementById("wall").innerHTML = "Wall climbed: "+c;
}

setInterval(update, 200);

function timer(){
t=t-1;
document.getElementById("cwall").innerHTML= "Climbing wall <br>( "+t+" )";
if (t<=0){
c=c+1;
document.getElementById("cwall").style.opacity=1;
document.getElementById("cwall").disabled=false;
document.getElementById("cwall").innerHTML="Start climbing";

clearInterval(TimeLeft);
}
}


document.getElementById("cwall").onclick = function() {
t=2+c;

document.getElementById("cwall").innerHTML= "Climbing wall <br>( "+t+" )";
TimeLeft = setInterval(timer, 1000);

document.getElementById("cwall").style.opacity=0.6;
document.getElementById("cwall").disabled=true;

};
