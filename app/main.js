let fly = {};
fly.y = 0;
fly.x = 0;
let key = new Proxy({}, {
    get(target, prop, receiver) {
        return target[prop] ?? (false);
    }
});

document.onkeydown = (e) => {
    key[e.key] = true;

}
document.onkeyup = (e) => {
    key[e.key] = false;

}
function gameLoop() {
    requestAnimationFrame(gameLoop);
    if(key.ArrowUp) {
        
    }
    $('#main').css()

}
gameLoop();