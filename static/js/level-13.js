"use strict";

function submit() {
    ans = document.querySelector("input").value;
    if (ans == false) alert("Enter valid answer");
    else
        try {
            fetch("/level/13", {
                method: "POST",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: "ans=" + ans
            }).then(() => {});
        } catch (error) {}
}
