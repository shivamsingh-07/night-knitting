"use strict";

let ans;
document.querySelector("#submit").addEventListener("click", submit);

function submit() {
    ans = document.querySelector("input").value;
    if (ans == false) alert("Enter valid answer");
    else
        fetch("/level/3", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: "ans=" + ans
        });
}
