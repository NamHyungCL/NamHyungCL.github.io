const rainContainer = document.getElementById('rain-container');

function createRainDrop() {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    drop.style.opacity = Math.random();
    rainContainer.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 3000);
}

setInterval(createRainDrop, 100);