(function () {
    'use strict';

    const color = document.querySelector('#color');
    const bgcolor = document.querySelector('#bgcolor');
    const colortable = document.querySelector('table tbody');
    let noHistory=true;

    color.addEventListener('change', changeColor);

    bgcolor.addEventListener('change', changeBackColor);


    function changeColor() {
        document.body.style.color = color.value;
        const now = new Date();
        insertColor(color.value, 'color', now.toLocaleTimeString());
    };
    function changeBackColor() {
        document.body.style.backgroundColor = bgcolor.value;
        const now = new Date();
        insertColor(bgcolor.value, 'backroundcolor',now.toLocaleTimeString());

    };

    function insertColor(color, type,time) {
       if(noHistory){
        colortable.deleteRow(0);
        noHistory=false;
       }
        const row = colortable.insertRow();
        const newtype = row.insertCell();
        const newcolor = row.insertCell();
        const newtime = row.insertCell();
        newtype.innerText = `${type}`;
        newcolor.innerText = `${color}`;
        newtime.innerText = `${time}`;
        const rowColor = setColorByClick.bind(this, color, type);
        row.addEventListener('click', rowColor);


    };

    function setColorByClick(color, type) {
        if (type === 'color')
           document.body.style.color = `${color}`;
        else
            document.body.style.backgroundColor =`${color}`;

         const now = new Date();
        insertColor(color, type, now.toLocaleTimeString());

    };
}());
