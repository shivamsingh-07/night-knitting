"use strict";

window.history.pushState(null, null, "?");
var _0x83ea = [
    "\x76\x61\x6C\x75\x65",
    "\x69\x6E\x70\x75\x74",
    "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72",
    "\x45\x6E\x74\x65\x72\x20\x76\x61\x6C\x69\x64\x20\x61\x6E\x73\x77\x65\x72",
    "\x50\x4F\x53\x54",
    "\x2F\x6C\x65\x76\x65\x6C\x2F\x31\x34",
    "\x6F\x70\x65\x6E",
    "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65",
    "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E",
    "\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72",
    "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
    "\x73\x65\x6E\x64",
    "\x73\x6C\x65\x65\x70\x79\x68\x6F\x6C\x6C\x6F\x77\x73",
    "",
    "\x72\x65\x70\x6C\x61\x63\x65",
    "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65",
    "\x2E\x2D",
    "\x2D\x2E\x2E\x2E",
    "\x2D\x2E\x2D\x2E",
    "\x2D\x2E\x2E",
    "\x2E",
    "\x2E\x2E\x2D\x2E",
    "\x2D\x2D\x2E",
    "\x2E\x2E\x2E\x2E",
    "\x2E\x2E",
    "\x2E\x2D\x2D\x2D",
    "\x2D\x2E\x2D",
    "\x2E\x2D\x2E\x2E",
    "\x2D\x2D",
    "\x2D\x2E",
    "\x2D\x2D\x2D",
    "\x2E\x2D\x2D\x2E",
    "\x2D\x2D\x2E\x2D",
    "\x2E\x2D\x2E",
    "\x2E\x2E\x2E",
    "\x2D",
    "\x2E\x2E\x2D",
    "\x2E\x2E\x2E\x2D",
    "\x2E\x2D\x2D",
    "\x2D\x2E\x2E\x2D",
    "\x2D\x2E\x2D\x2D",
    "\x2D\x2D\x2E\x2E",
    "\x2F",
    "\x2E\x2D\x2D\x2D\x2D",
    "\x2E\x2E\x2D\x2D\x2D",
    "\x2E\x2E\x2E\x2D\x2D",
    "\x2E\x2E\x2E\x2E\x2D",
    "\x2E\x2E\x2E\x2E\x2E",
    "\x2D\x2E\x2E\x2E\x2E",
    "\x2D\x2D\x2E\x2E\x2E",
    "\x2D\x2D\x2D\x2E\x2E",
    "\x2D\x2D\x2D\x2D\x2E",
    "\x2D\x2D\x2D\x2D\x2D",
    "\x20",
    "\x6A\x6F\x69\x6E",
    "\x6D\x61\x70",
    "\x73\x70\x6C\x69\x74",
    "\x73\x68\x6F\x72\x74",
    "\x72\x65\x6D\x6F\x76\x65",
    "\x63\x6C\x61\x73\x73\x4C\x69\x73\x74",
    "\x2E\x62\x6C\x69\x6E\x6B",
    "\x6C\x6F\x6E\x67",
    "\x61\x64\x64",
    "\x6C\x65\x6E\x67\x74\x68"
];
let ans;
function submit() {
    ans = document[_0x83ea[2]](_0x83ea[1])[_0x83ea[0]];
    if (ans == false) {
        alert(_0x83ea[3]);
    } else {
        const _0x9905x3 = new XMLHttpRequest();
        _0x9905x3[_0x83ea[6]](_0x83ea[4], _0x83ea[5], true);
        _0x9905x3[_0x83ea[9]](_0x83ea[7], _0x83ea[8]);
        _0x9905x3[_0x83ea[11]](JSON[_0x83ea[10]]({ ans }));
    }
}
var phrase = _0x83ea[12];
phrase = phrase[_0x83ea[15]]()[_0x83ea[14]](/[^a-z]/g, _0x83ea[13]);
var alphabet = {
    a: _0x83ea[16],
    b: _0x83ea[17],
    c: _0x83ea[18],
    d: _0x83ea[19],
    e: _0x83ea[20],
    f: _0x83ea[21],
    g: _0x83ea[22],
    h: _0x83ea[23],
    i: _0x83ea[24],
    j: _0x83ea[25],
    k: _0x83ea[26],
    l: _0x83ea[27],
    m: _0x83ea[28],
    n: _0x83ea[29],
    o: _0x83ea[30],
    p: _0x83ea[31],
    q: _0x83ea[32],
    r: _0x83ea[33],
    s: _0x83ea[34],
    t: _0x83ea[35],
    u: _0x83ea[36],
    v: _0x83ea[37],
    w: _0x83ea[38],
    x: _0x83ea[39],
    y: _0x83ea[40],
    z: _0x83ea[41],
    "\x20": _0x83ea[42],
    1: _0x83ea[43],
    2: _0x83ea[44],
    3: _0x83ea[45],
    4: _0x83ea[46],
    5: _0x83ea[47],
    6: _0x83ea[48],
    7: _0x83ea[49],
    8: _0x83ea[50],
    9: _0x83ea[51],
    0: _0x83ea[52]
};
phrase = phrase[_0x83ea[56]](_0x83ea[13])
    [_0x83ea[55]](function (_0x9905x6) {
        return alphabet[_0x9905x6[_0x83ea[15]]()] || _0x83ea[13];
    })
    [_0x83ea[54]](_0x83ea[53]);
phrase = phrase[_0x83ea[56]](_0x83ea[13]);
var morseL = function () {
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[57]);
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[61]);
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[62]](_0x83ea[61]);
    setTimeout(function () {
        document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[61]);
    }, 1200);
};
var morseS = function () {
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[57]);
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[61]);
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[62]](_0x83ea[57]);
    setTimeout(function () {
        document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[57]);
    }, 400);
};
var morseN = function () {
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[57]);
    document[_0x83ea[2]](_0x83ea[60])[_0x83ea[59]][_0x83ea[58]](_0x83ea[61]);
};
var i = 0;
var time = 0;
function myLoop() {
    setTimeout(function () {
        if (phrase[i] === _0x83ea[35]) {
            morseL();
            time = 1400;
        } else {
            if (phrase[i] === _0x83ea[20]) {
                morseS();
                time = 800;
            } else {
                if (phrase[i] === _0x83ea[53]) {
                    morseN();
                    time = 1200;
                }
            }
        }
        i++;
        if (i < phrase[_0x83ea[63]]) {
            myLoop();
        } else {
            i = 0;
            setTimeout(myLoop, 5000);
        }
    }, time);
}
setTimeout(myLoop, 1000);
