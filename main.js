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

let divCircle = document.createElement('div');
divCircle.className = 'toggle-circle';
nightMode.append(divCircle);

changeColor.insertAdjacentHTML('afterbegin', `<div class="colors">
                                                <input class="colors-input" type="color" >
                                              </div>`);

let divKeyboardLights = document.createElement('div');
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

row5.innerHTML = init(arrRow5);
row5.children[3].classList.add('space-key');

