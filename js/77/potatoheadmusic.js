const musicDiv = document.querySelector('#music-div');
const musicUl = document.querySelector('#music-ul');
const niceMusicButton = document.querySelector('#button-nice-music');
const YaamoidButton = document.querySelector('#button-yaamoid');
const stopButton = document.querySelector('#stop-button');
const audio = document.querySelector('#music');
musicDiv.addEventListener('mouseenter', () => {
    musicUl.style.display = 'block';
});

musicDiv.addEventListener('mouseleave', (e) => {
    musicUl.style.display = 'none';
});
let currentMusic;
niceMusicButton.addEventListener('click', (e) => {
        currentMusic='music/music1.mp3';
        audio.src = 'music/music1.mp3';
        console.log(audio.src);
        audio.play();
    });

YaamoidButton.addEventListener('click', (e) => {
        audio.src = 'music/yaamoid.mp3';
        audio.play();
});
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});