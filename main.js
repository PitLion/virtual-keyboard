//draw a keyboard

const arrRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const arrRow2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
const arrRow3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'];
const arrRow4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '?', 'Shift'];
const arrRow5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Fn', 'Ctrl'];

const container = document.querySelector('.container');

container.insertAdjacentHTML('afterbegin', `<div class="wrapper">
                                              <div class="night-mode"></div>
                                              <div class="change-color"></div>
                                            </div>
                                            <div class="keyboard"></div>
                                            <textarea class="text"></textarea>`);

const wrapper = container.querySelector('.wrapper');                                           
const nightMode = wrapper.querySelector('.night-mode');
const changeColor = wrapper.querySelector('.change-color');
const keyboard = container.querySelector('.keyboard');
const text = container.querySelector('.text');

let divCircle = document.createElement('div');//toggle-circle
divCircle.className = 'toggle-circle';
nightMode.append(divCircle);

changeColor.insertAdjacentHTML('afterbegin', `<div class="colors">
                                                <input class="colors-input" type="color" >
                                              </div>`);

let divKeyboardLights = document.createElement('div');//keyboard-lights
divKeyboardLights.className = 'keyboard-lights';
keyboard.prepend(divKeyboardLights);

let divKeyboardKeys = document.createElement('div');
divKeyboardKeys.className = 'keyboard-keys';
keyboard.append(divKeyboardKeys);

divKeyboardKeys.insertAdjacentHTML('afterbegin', `<div class="row row1"></div>
                                                  <div class="row row2"></div>
                                                  <div class="row row3"></div>
                                                  <div class="row row4"></div>
                                                  <div class="row row5"></div>`);

let row1 = divKeyboardKeys.querySelector('.row1');
let row2 = divKeyboardKeys.querySelector('.row2');
let row3 = divKeyboardKeys.querySelector('.row3');
let row4 = divKeyboardKeys.querySelector('.row4');
let row5 = divKeyboardKeys.querySelector('.row5');

function init(arr) {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += `<div class = "keys">${arr[i]}</div>`;
  }
  return out;
}

row1.innerHTML = init(arrRow1);
row1.lastElementChild.classList.add('backspace-key');

row2.innerHTML = init(arrRow2);
row2.lastElementChild.classList.add('slash-key');
row2.firstElementChild.classList.add('tab-key');

row3.innerHTML = init(arrRow3);
row3.lastElementChild.classList.add('enter-key');
row3.firstElementChild.classList.add('caps-lock-key');

row4.innerHTML = init(arrRow4);
row4.lastElementChild.classList.add('shift-key');
row4.firstElementChild.classList.add('shift-key');
row4.lastElementChild.classList.add('shift-right');
row4.firstElementChild.classList.add('shift-left');

row5.innerHTML = init(arrRow5);
row5.children[3].classList.add('space-key');
row5.children[2].classList.add('alt-left');
row5.children[4].classList.add('alt-right');
row5.lastElementChild.classList.add('control-right');
row5.firstElementChild.classList.add('control-left');

//PRINT CAPS
let keys = document.querySelectorAll(".keys");
let spaceKey = document.querySelector(".space-key");
let shiftLeft = document.querySelector(".shift-left");
let shiftRight = document.querySelector(".shift-right");
let controlLeft = document.querySelector(".control-left");
let controlRight = document.querySelector(".control-right");
let altLeft = document.querySelector(".alt-left");
let altRight = document.querySelector(".alt-right");
let capsLockKey = document.querySelector(".caps-lock-key");
let body = document.querySelector("body");
let colorsInput = document.querySelector(".colors-input");

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute("keyname", keys[i].innerText);
    keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
  }

  window.addEventListener("keydown", function (e) {
    for (let i = 0; i < keys.length; i++) {
      if (
        e.key == keys[i].getAttribute("keyname") ||
        e.key == keys[i].getAttribute("lowerCaseName")
      ) {
        keys[i].classList.add("active");
      }
      if (e.code == "Space") {
        spaceKey.classList.add("active");
      }
      if (e.code == "ShiftLeft") {
        shiftRight.classList.remove("active");
      }
      if (e.code == "ShiftRight") {
        shiftLeft.classList.remove("active");
      }
      if (e.code == "AltLeft") {
        altRight.classList.remove("active");
      }
      if (e.code == "AltRight") {
        altLeft.classList.remove("active");
      }
      if (e.code == "ControlLeft") {
        controlRight.classList.remove("active");
      }
      if (e.code == "ControlRight") {
        controlLeft.classList.remove("active");
      }
      if (e.code == "CapsLock") {
        capsLockKey.classList.toggle("active");
      }
    }
  });

  window.addEventListener("keyup", function (e) {
    for (let i = 0; i < keys.length; i++) {
      if (
        e.key == keys[i].getAttribute("keyname") ||
        e.key == keys[i].getAttribute("lowerCaseName")
      ) {
        keys[i].classList.remove("active");
        keys[i].classList.add("remove");
      }
      if (e.code == "Space") {
        spaceKey.classList.remove("active");
        spaceKey.classList.add("remove");
      }
      if (e.code == "ShiftLeft") {
        shiftRight.classList.remove("active");
        shiftRight.classList.remove("remove");
      }
      if (e.code == "ShiftRight") {
        shiftLeft.classList.remove("active");
        shiftLeft.classList.remove("remove");
      }
      if (e.code == "AltLeft") {
        altRight.classList.remove("active");
        altRight.classList.remove("remove");
      }
      if (e.code == "AltRight") {
        altLeft.classList.remove("active");
        altLeft.classList.remove("remove");
      }
      if (e.code == "ControlLeft") {
        controlRight.classList.remove("active");
        controlRight.classList.remove("remove");
      }
      if (e.code == "ControlRight") {
        controlLeft.classList.remove("active");
        controlLeft.classList.remove("remove");
      }
      setTimeout(() => {
        keys[i].classList.remove("remove");
      }, 200);
    }
  });

  //ANIMATION
  nightMode.addEventListener("click", function () {
    divCircle.classList.toggle("active");
    body.classList.toggle("active");
    nightMode.classList.toggle("active");
    keyboard.classList.toggle("active");
    text.classList.toggle("active");
    changeColor.classList.toggle("active");
    for (let i = 0; i < keys.length; i++) {
      keys[i].classList.toggle("keys_night");
    }
  });
  
  colorsInput.addEventListener("input", function () {
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.color = colorsInput.value;
    }
    divKeyboardLights.style.background = colorsInput.value;
  });  
  
// click
keys.forEach(function(elem) {
    elem.onclick = function(event) {
        keys.forEach(function(elem) {
            elem.classList.remove('active');
        });
    this.classList.add('active');
    }
});