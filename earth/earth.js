setInterval(() => {
    man()
}, 100)
setInterval(() => {
    car()
}, 35)
setInterval(() => {
    aeroplane()
}, 35)

let c = 0,
    m = 0,
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