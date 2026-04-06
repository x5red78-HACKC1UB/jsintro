let password;
let savedPassword;
let rightanswer1=2+2;
let answer1;
let text;
let splice=1;
document.getElementById("myButton").onclick = function(){
text= document.getElementById("mytext").value;
window.alert(text.slice(0,splice));
}
document.getElementById("coolbutton").onclick=function(){
splice++;
}

savedPassword= window.prompt("What do you want you password to be?");
savedPassword= savedPassword.trim().charAt(0).toUpperCase()+ savedPassword.trim().slice(1).toLowerCase
console.log(savedPassword);
password=window.prompt("What is your password");//window prompt it allows user input
switch (true) {
    case password === savedPassword:
        
        window.alert("You're in!")
        break;
case password !== savedPassword:
    window.alert("WRONG PASSWORD, GET OUT U HACKER :(")
    break;
}
//This is a switch
answer1=window.prompt("What is 2+2?"); //any response will be converted as a string
answer1=Number(answer1); //convert string to number
if (answer1=== rightanswer1) {
    window.alert("Correct!")
} else {
    window.alert("wrong")
}
console.log(rightanswer1);
console.log(answer1);
//window.propmt is a lazy way to accept user input
/* idk how i would put this in the project so.    (i figured it out)
.toLowerCase= makes output lower case
.toUpperCase= makes your output upper case
.trim = removes white space
u use this for method chaining well most . is method chaining\
dont feel like deleting this so it stays


*/