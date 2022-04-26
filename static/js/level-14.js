"use strict";

window.history.pushState(null, null, "?");

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
});

var phrase = "sleepyhollows";
phrase = phrase.toLowerCase().replace(/[^a-z]/g, "");

var alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "/",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----"
};

phrase = phrase
    .split("") // Transform the string into an array: ['T', 'h', 'i', 's'...
    .map(function (e) {
        // Replace each character with a morse "letter"
        return alphabet[e.toLowerCase()] || ""; // Lowercase only, ignore unknown characters.
    })
    .join(" ");

phrase = phrase.split("");

var morseL = function () {
    document.querySelector(".blink").classList.remove("short");
    document.querySelector(".blink").classList.remove("long");
    document.querySelector(".blink").classList.add("long");
    setTimeout(function () {
        document.querySelector(".blink").classList.remove("long");
    }, 1200);
};
var morseS = function () {
    document.querySelector(".blink").classList.remove("short");
    document.querySelector(".blink").classList.remove("long");
    document.querySelector(".blink").classList.add("short");
    setTimeout(function () {
        document.querySelector(".blink").classList.remove("short");
    }, 400);
};
var morseN = function () {
    document.querySelector(".blink").classList.remove("short");
    document.querySelector(".blink").classList.remove("long");
};

var i = 0;
var time = 0;

function myLoop() {
    setTimeout(function () {
        if (phrase[i] === "-") {
            morseL();
            time = 1400;
        } else if (phrase[i] === ".") {
            morseS();
            time = 800;
        } else if (phrase[i] === " ") {
            morseN();
            time = 1200;
        }
        i++;
        if (i < phrase.length) {
            myLoop();
        } else {
            i = 0;
            setTimeout(myLoop, 5000);
        }
    }, time);
}

setTimeout(myLoop, 1000);
