let count1 = 0;
let pointHome = document.getElementById("score-card-home");
function homePoint1(){
    count1 += 1;
    pointHome.textContent = count1;
}

function homePoint2(){
    count1 += 2;
    pointHome.textContent = count1;
}

function homePoint3(){
    count1 += 3;
    pointHome.textContent = count1;
}

let count2=0;
let pointGuest= document.getElementById("score-card-guest");
function guestPoint1(){
    count2 +=1;
    pointGuest.textContent=count2;
}
function guestPoint2(){
    count2 +=2;
    pointGuest.textContent=count2;
}
function guestPoint3(){
    count2 += 3;
    pointGuest.textContent = count2;
}