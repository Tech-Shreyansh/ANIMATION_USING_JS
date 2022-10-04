setInterval(sun, 100);
setInterval(() => {
    move(mercury);
}, 100)
setInterval(() => {
    move(venus);
}, 100)
setInterval(() => {
    move(earth);
}, 100)
setInterval(() => {
    move(mars);
}, 100)
setInterval(() => {
    move(jupiter);
}, 100)
setInterval(() => {
    move(saturn);
}, 100)
setInterval(() => {
    move(uranus);
}, 100)
setInterval(() => {
    move(neptune);
}, 100)
setInterval(() => {
        astro();
    },
    20);
setInterval(() => {
        spaceship();
    },
    20);
let x, y, l = 0,
    m = 0;

function sun() {
    const Sun_left = (window.innerWidth / 2) - 35;
    const Sun_top = (window.innerHeight / 2) - 100;
    const sun = document.getElementsByClassName('sun');
    sun[0].style.left = Sun_left + 'px';
    sun[0].style.top = Sun_top + 'px';
    x = Sun_left;
    y = Sun_top;
}
const mercury = {
    speed: 0.4,
    angle: 0,
    radius: 100,
    pl: '.mercury'
}
const venus = {
    speed: 0.2,
    angle: 0,
    radius: 130,
    pl: '.venus'
}
const earth = {
    speed: 0.095,
    angle: 0,
    radius: 170,
    pl: '.earth'
}
const mars = {
    speed: 0.07,
    angle: 0,
    radius: 200,
    pl: '.mars'
}
const jupiter = {
    speed: 0.05,
    angle: 0,
    radius: 280,
    pl: '.jupiter'
}
const saturn = {
    speed: 0.035,
    angle: 0,
    radius: 380,
    pl: '.saturn'
}
const uranus = {
    speed: 0.020,
    angle: 0,
    radius: 470,
    pl: '.uranus'
}
const neptune = {
    speed: 0.005,
    angle: 0,
    radius: 530,
    pl: '.neptune'
}

function astro() {
    var astro = document.getElementsByClassName('astro');
    m += 31.4;
    astro[0].style.top = 250 + Math.floor(Math.cos(m) * 50) + 'px';
}

function spaceship() {
    var spaceship = document.getElementsByClassName('spaceship');
    l += 31.4;
    spaceship[0].style.left = 75 + Math.floor(Math.cos(l) * 25) + 'px';
}

function move(planet) {
    planet.angle += planet.speed;
    document.querySelector(planet.pl).style.left = Math.floor(Math.cos(planet.angle) * planet.radius) + x + 40 + 'px';
    document.querySelector(planet.pl).style.top = Math.floor(Math.sin(planet.angle) * planet.radius) + y + 35 + 'px';
}