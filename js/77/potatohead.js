(function () {
     'use strict';
     let dragging = false;
     let x;
     let y;
     let partsArray = JSON.parse(localStorage.getItem('parts')) || [];
     let myZindex = 0;
     partsArray.forEach(part => {
          const myPart = document.querySelector(`#${part.id}`);
          myPart.style.left = part.x;
          myPart.style.top = part.y;
          myPart.style.position = 'absolute';
          myPart.style.zIndex = part.curZindex;
     });

     document.addEventListener('mousedown', (e) => {
          if (e.target.className === 'potatoimg') {
               e.preventDefault();
               dragging = e.target;
               x = e.offsetX;
               y = e.offsetY;
               dragging.style.zIndex = myZindex++;
               console.log(dragging);
          }
     });
     document.addEventListener('mousemove', (e) => {
          if (dragging) {
               dragging.style.left = `${e.pageX - x}px`;
               dragging.style.top = `${e.pageY - y}px`;


               dragging.style.position = 'absolute';
          }
     });


     document.addEventListener('mouseup', (e) => {

          if (dragging)/*(e.target !== e.currentTarget && e.target.className === 'potatoimg')*/ {
               saveParts(e);
          }
          dragging = null;

     });
     function saveParts(part) {
          partsArray = partsArray.filter(check =>
               check.id !== part.target.id
          );
          partsArray.push({ id: part.target.id, x: part.target.style.left, y: part.target.style.top, curZindex: part.target.style.zIndex });
          localStorage.setItem('parts', JSON.stringify(partsArray));
     }


}());

