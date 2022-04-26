"use strict";
let ans;
document.querySelector("area").addEventListener("click", click);
function click() {
    document.querySelector(".img1").classList.add("hidden");
    document.querySelector(".img2").classList.remove("hidden");
}
function feedme() {
    ans = prompt("Feed Me : ");
    if (ans == false) alert("Enter valid answer");
    else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/level/4", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("ans=" + ans);
    }
}
