"use strict";
document.querySelector("span").addEventListener("click", click);

function click() {
    alert(`MTkuMjkwMiw5OS4wOTY1`);
}

document.querySelector("span").style.cursor = "pointer";

let keys = [];

document.addEventListener("keydown", key);
function key(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/level/6", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("ans=" + e.keyCode);
}
