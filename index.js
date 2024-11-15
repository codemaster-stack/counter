//console.log("Hello");
//window.alert("hey you");
//window.alert("i love programing");



//document.getElementById("myh1").textContent="Hello"
//document.getElementById("myp").textContent="i love programing"




//let x=34
//x=x+3
//console.log(x)
//console.log(typeof x);

//let online=true
//console.log(online)
//console.log(typeof online)
//console.log(" bro is online:  ${online}")

//let fullName="Oghenetega Jeffery Abinuwa"
//let age=23
//let student= false

//document.getElementById("p1").textContent=`my name is: ${fullName}`;
//document.getElementById("p2").textContent= `my age is: ${age}`;
//document.getElementById("p3").textContent= `im i still a student: ${student}`;

//let userName=window.prompt("what is your userName?")

//console.log(userName); 

//let username;

//document.getElementById("mySubmit").onclick = function(){
    //username=document.getElementById("myText").value;
    //console.log(username);

//document.getElementById("myH1").textContent= `Welcome ${username}`;
//}


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count= 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}