setInterval(() => {
    man()
}, 100)
setInterval(() => {
    car()
}, 35)
setInterval(() => {
    aeroplane()
}, 35)
setInterval(() => {
    bird()
}, 119)
setInterval(() => {
    bird2()
}, 200)

let c = 0,
    m = 0,
    b = 0,
    a = 0;

function man() {
    var man = document.getElementsByClassName('man');
    m += 5.4;
    man[0].style.left = 500 + Math.floor(m) + 'px';
    man[0].style.top = 350 + Math.floor(m * 0.2) + 'px';
    if (m > 300)
        m = 0;
}


function car() {
    var car = document.getElementsByClassName('car');
    c += 5;
    car[0].style.left = 250 + Math.floor(c) + 'px';
    if (c > 800)
        c = 0;
}

function aeroplane() {
    var aeroplane = document.getElementsByClassName('aeroplane');
    a += 5;
    aeroplane[0].style.left = 250 + Math.floor(a) + 'px';
    if (a > 800)
        a = 0;
}

function bird() {
    var bird = document.getElementsByClassName('bird');
    b += 5;
    bird[0].style.left = 930 + Math.floor(b) + 'px';
    bird[0].style.top = 300 + Math.floor(b * 0.1) + 'px';

    if (b > 230)
        b = 0;
}

function bird2() {
    var bird2 = document.getElementsByClassName('bird2');
    bird2[0].style.left = 340 + Math.floor(b) + 'px';
    bird2[0].style.top = 340 - Math.floor(b * 0.1) + 'px';
}