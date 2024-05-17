
let fly = {};
fly.y = 0;
fly.x = 0;
fly.vx = 0;
fly.vy = 0;
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
    
    fly.vy -= (key.ArrowUp - key.ArrowDown);
    fly.vx += (key.ArrowRight - key.ArrowLeft);
    
    fly.vx *= .9;
    fly.vy *= .9;
    fly.y += fly.vy;
    fly.x += fly.vx;
    if (fly.x > $(window).width()) {
        fly.x = -$('#plain').width();
    }
    if (fly.x < -$('#plain').width()) {
        fly.x = $(window).width();
    }
    if (fly.y > $(window).width()) {
        fly.y = -$('#plain').width();
    }
    if (fly.y < -$('#plain').width()) {
        fly.y = $(window).width();
    }
    $('#plain').css({'top':fly.y,'left':fly.x})
}
gameLoop();