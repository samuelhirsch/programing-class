window.pcs = function (selector) {
  'use strict';

  function getElement(selector) {
    return document.querySelector(selector);
  }

  function setCss(element, property, value) {
    //console.log('in setCss', property);
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }

  function on(element, event, callback) {
    element.addEventListener(event, callback);
  }
  function sparkle(element, length, speed = 1000) {
    const intervelid = setInterval(() => {
      function getColorPart() {
        return Math.floor(Math.random() * 256);
      }

      function pickRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();
        return `rgb(${r}, ${g}, ${b})`;
      }
      setCss(element, 'color', pickRandomColor());
      setCss(element, 'background', pickRandomColor());

    }, speed);
    setTimeout(() => {
      clearInterval(intervelid);
    },length);
  };


  const element = getElement(selector);

  return {
    // getElement: getElement,
    /*setCss,
    getCss,*/
    css: function (property, value) {
      if (arguments.length === 1) {
        return getCss(element, property);
      } else {
        return setCss(element, property, value);
      }
    },
    on: (event, callback) => {
      on(element, event, callback);
    },
    click: (callback) => on(element, 'click', callback),
    hide: () => {
      setCss(element, 'display', 'none');
    },
    show: () => {
      setCss(element, 'display', 'inline-block');
    },
    sparkle: (length, speed) => {
      sparkle(element, length, speed);
    }
  };
};
