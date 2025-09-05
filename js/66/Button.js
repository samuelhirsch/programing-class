(function () {
    'use strict';
    const buttonselector = document.querySelector('button');
    const myevent = buttonselector.addEventListener('click', buttonMaker);

    let textForButton = 1;

    function buttonMaker() {
        const newbutton = document.createElement('button');
        newbutton.textContent = ++textForButton;
        newbutton.addEventListener('click', buttonMaker);
        document.body.appendChild(newbutton);
    };
    // 2nd waybubble up
    /* document.body.addEventListener('click', e => {
        
         if(e.target ===document.body)
             return;
         const newbutton = document.createElement('button');
         newbutton.textContent = ++textForButton;
         document.body.appendChild(newbutton);
     });*/
}());