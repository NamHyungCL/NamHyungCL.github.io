const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';

const raindrops = [];

function createRaindrop() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 5 + 2,
    };
}

for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop());
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#4b0082';
    ctx.lineWidth = 2;
    ctx.beginPath();

    raindrops.forEach(drop => {
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
    });

    ctx.stroke();
}

function updateRain() {
    raindrops.forEach(drop => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            drop.y = -drop.length;
            drop.x = Math.random() * canvas.width;
        }
    });
}

function animateRain() {
    drawRain();
    updateRain();
    requestAnimationFrame(animateRain);
}

animateRain();

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '✨';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.fontSize = (Math.random() * 10 + 8) + 'px';
    document.body.appendChild(star);
}

for (let i = 0; i < 30; i++) {
    createStar();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 800);

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 100);
        }
    });
}, observerOptions);

function initCardObserver() {
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCardObserver);
} else {
    initCardObserver();
}
