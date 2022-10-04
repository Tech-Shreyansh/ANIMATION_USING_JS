setInterval(sun, 100);
setInterval(() => {
    move(mercury);
}, 100)
let x, y;

function sun() {
    const Sun_left = (window.innerWidth / 2) - 35;
    const Sun_top = (window.innerHeight / 2) - 40;
    const sun = document.getElementsByClassName('sun');
    sun[0].style.left = Sun_left + 'px';
    sun[0].style.top = Sun_top + 'px';
    x = Sun_left;
    y = Sun_top;
}
const mercury = {
    speed: 0.05,
    angle: 0,
    radius: 100,
    pl: '.mercury'
}
console.log(Math.cos(mercury.angle) * mercury.radius + 'px')

function move(planet) {
    planet.angle += planet.speed;
    document.querySelector(planet.pl).style.left = Math.floor(Math.cos(planet.angle) * planet.radius) + x + 27 + 'px';
    document.querySelector(planet.pl).style.top = Math.floor(Math.sin(planet.angle) * planet.radius) + y + 27 + 'px';
}