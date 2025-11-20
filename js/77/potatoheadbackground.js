//(function(){
'use strict';
const main = document.querySelector('#maindiv');
const myBackGroundImages = document.querySelectorAll('#background-ul img');
const backgroundDiv = document.querySelector('#background-div');
const backGroundUl = document.querySelector('#background-ul');
myBackGroundImages.forEach(image => {
    image.addEventListener('click', (e) => {
        main.style.backgroundImage = `url(${e.target.src})`;
    });
});
backgroundDiv.addEventListener('mouseenter', () => {
    backGroundUl.style.display = 'grid';
});

backgroundDiv.addEventListener('mouseleave', (e) => {
    backGroundUl.style.display = 'none';
});



//}());