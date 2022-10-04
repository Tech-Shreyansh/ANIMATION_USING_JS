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
let x, y;

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
    speed: 0.1,
    angle: 0,
    radius: 100,
    pl: '.mercury'
}
const venus = {
    speed: 0.099,
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
    speed: 0.09,
    angle: 0,
    radius: 200,
    pl: '.mars'
}
const jupiter = {
    speed: 0.06,
    angle: 0,
    radius: 280,
    pl: '.jupiter'
}
const saturn = {
    speed: 0.05,
    angle: 0,
    radius: 380,
    pl: '.saturn'
}
const uranus = {
    speed: 0.04,
    angle: 0,
    radius: 470,
    pl: '.uranus'
}
const neptune = {
    speed: 0.025,
    angle: 0,
    radius: 530,
    pl: '.neptune'
}

function move(planet) {
    planet.angle += planet.speed;
    document.querySelector(planet.pl).style.left = Math.floor(Math.cos(planet.angle) * planet.radius) + x + 40 + 'px';
    document.querySelector(planet.pl).style.top = Math.floor(Math.sin(planet.angle) * planet.radius) + y + 60 + 'px';
}