function myfun(){

let t1 = getElementById('t1').value
let t2 = getElementById('t2').value
let t3 = getElementById('t3').value
let t4 = getElementById('t4').value
let t5 = getElementById('t5').value
let t6 = getElementById('t6').value
let t7 = getElementById('t7').value
let t8 = getElementById('t8').value
let t9 = getElementById('t9').value

let x = "X"

if (t1 == x && t2 == x && t3 == x) {
    alert('you won')
}
else if(t4 =="O"){
    alert("you are mine")
}

}






let fan = 1
function runer(){
    if (fan == 1) {
        document.getElementById("t1").innerHTML= "X"
        document.getElementById("t1").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t1").innerHTML= "O"
        document.getElementById("t1").disabled = true; 
        fan = 1
    }
}
function runer1(){
    if (fan == 1) {
        document.getElementById("t2").innerHTML= "X"
        document.getElementById("t2").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t2").innerHTML= "O"
        document.getElementById("t2").disabled = true; 
        fan = 1
    }
}
function runer2(){
    if (fan == 1) {
        document.getElementById("t3").innerHTML= "X"
        document.getElementById("t3").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t3").innerHTML= "O"
        document.getElementById("t3").disabled = true; 
        fan = 1
    }
}
function runer3(){
    if (fan == 1) {
        document.getElementById("t4").innerHTML= "X"
        document.getElementById("t4").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t4").innerHTML= "O"
        document.getElementById("t4").disabled = true; 
        fan = 1
    }
}
function runer4(){
    if (fan == 1) {
        document.getElementById("t5").innerHTML= "X"
        document.getElementById("t5").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t5").innerHTML= "O"
        document.getElementById("t5").disabled = true; 
        fan = 1
    }
}
function runer5(){
    if (fan == 1) {
        document.getElementById("t6").innerHTML= "X"
        document.getElementById("t6").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t6").innerHTML= "O"
        document.getElementById("t6").disabled = true; 
        fan = 1
    }
}
function runer6(){
    if (fan == 1) {
        document.getElementById("t7").innerHTML= "X"
        document.getElementById("t7").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t7").innerHTML= "O"
        document.getElementById("t7").disabled = true; 
        fan = 1
    }
}
function runer7(){
    if (fan == 1) {
        document.getElementById("t8").innerHTML= "X"
        document.getElementById("t8").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t8").innerHTML= "O"
        document.getElementById("t8").disabled = true; 
        fan = 1
    }
}
function runer8(){
    if (fan == 1) {
        document.getElementById("t9").innerHTML= "X"
        document.getElementById("t9").disabled = true; 
        fan = 0
    } else {
        document.getElementById("t9").innerHTML= "O"
        document.getElementById("t9").disabled = true; 
        fan = 1
    }
}

btn1.addEventListener("click" , function run(){
    t1.innerHTML  = " "
    t2.innerHTML  = " "
    t3.innerHTML  = " "
    t4.innerHTML  = " "
    t5.innerHTML  = " "
    t6.innerHTML  = " "
    t7.innerHTML  = " "
    t8.innerHTML  = " "
    t9.innerHTML  = " "
})

