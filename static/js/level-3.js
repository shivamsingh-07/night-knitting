"use strict";
let ans;
document.querySelector("#submit").addEventListener("click", submit);
function submit() {
    ans = document.querySelector("input").value;
    if (ans == false) alert("Enter valid answer");
    else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/level/3", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({ ans }));
    }
}