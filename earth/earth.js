setInterval(() => {
    man()
}, 100)
let l = 0,
    m = 0,
    n = 0;

function man() {
    var man = document.getElementsByClassName('man');
    m += 5.4;
    man[0].style.left = 500 + Math.floor(m) + 'px';
    man[0].style.top = 350 + Math.floor(m * 0.2) + 'px';
    if (m > 300)
        m = 0;
}