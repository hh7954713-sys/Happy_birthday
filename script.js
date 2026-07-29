let code = "";

const boxes = document.querySelectorAll(".box");

function add(num){

if(code.length < 2){

code += num;

boxes[code.length-1].innerHTML="•";

}

if(code.length===2){

setTimeout(check,300);

}

}

function check(){

if(code==="18"){

document.getElementById("lock").classList.add("hide");
document.getElementById("page1").classList.remove("hide");

}else{

document.getElementById("lock").classList.add("hide");
document.getElementById("wrong").classList.remove("hide");

}

}

function back(){

code="";

boxes.forEach(b=>b.innerHTML="");

document.getElementById("wrong").classList.add("hide");
document.getElementById("lock").classList.remove("hide");

}

function next(page){

for(let i=1;i<=5;i++){

let p=document.getElementById("page"+i);

if(p)p.classList.add("hide");

}

document.getElementById("page"+page).classList.remove("hide");

}