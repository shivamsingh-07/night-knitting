"use strict";
document.querySelector("span").addEventListener("click", click);

function click() {
    alert(`46.7757, 23.5210`);
}

document.querySelector("span").style.cursor = "pointer";

let keys = [];

document.addEventListener("keydown", key);
function key(e) {
    try {
        fetch("/level/4", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: "ans=" + e.keyCode
        }).then(() => window.location.reload());
    } catch (error) {}
}
