var yu = document.getElementById("muyu");
var trs = document.getElementById("hammer");
var btn = document.getElementById("btn");
var tt = document.getElementById("text");
var inv = document.getElementById("in");
var lb = document.getElementById("lbl");
var far = document.getElementById("father");
var boolean = 0;
var num = 1;
function animate(){
    tt.style.cssText="animation: txt 0.4s linear 1;";
    setTimeout(function(){
        tt.style.cssText="animation: none";
    },400)
}
trs.onclick = function(){
    animate();
}
yu.onclick = function(){
    trs.style.cssText="transform: rotate(-30deg)";
    setTimeout(function(){
        trs.style.cssText="transform: 0";
    },200)
    animate();
}
function fc(){
    inv.value = num;
    num++;
}
btn.onclick = function(){
    if(boolean === 0){
        inv.value = 0;
        lb.style.cssText="color: #000";
        trs.style.cssText="animation: loop 0.4s ease infinite";
        tt.style.cssText="animation: txt 0.4s linear infinite";
        far.style.cssText="pointer-events: none";
        boolean = 1;
        timing = setInterval("fc()", 400);
    }
    else{
        clearInterval(timing);
        num = 1;
        inv.value = "";
        lb.style.cssText="color: #fff";
        trs.style.cssText="animation: none";
        tt.style.cssText="animation: none";
        far.style.cssText="pointer-events: auto";
        boolean = 0;
    }
}