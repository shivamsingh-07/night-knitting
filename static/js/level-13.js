"use strict";

function submit() {
    ans = document.querySelector("input").value;
    if (ans == false) alert("Enter valid answer");
    else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/level/13", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("ans=" + ans);
    }
}
