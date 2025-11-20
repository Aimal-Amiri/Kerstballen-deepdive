const wheel = document.getElementById('wheel');
const startBtn = document.getElementById('startBtn');

let isSpinning = false;
let currentRotation = 0;

startBtn.addEventListener('click', () => {
    if (isSpinning) return;

    isSpinning = true;
    startBtn.disabled = true;

    const spinAmount = 1800 + Math.floor(Math.random() * 360);
    currentRotation += spinAmount;

    wheel.style.transition = 'transform 2.5s ease-out';
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        isSpinning = false;
        startBtn.disabled = false;

        const finalDeg = ((currentRotation % 360) + 360) % 360;

        
        const isGreen = (finalDeg >= 82 && finalDeg <= 90);

        if (isGreen) {
            console.log("KAZANDIN! YEŞİLE GELDİ.");
        }

    }, 3000);
});
