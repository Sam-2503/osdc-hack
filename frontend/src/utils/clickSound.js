export function clickSound() {
    const audio = new Audio('/click.mp3');
    audio.currentTime = 0;
    audio.play().catch(err => {
        console.warn("Click failed", err);
    });
}