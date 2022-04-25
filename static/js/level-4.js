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
    else
        fetch("/level/4", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: "ans=" + ans
        });
}
