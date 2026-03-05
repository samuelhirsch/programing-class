// console.log('js works');

let socketIo;
const nameInput = document.querySelector("#enter-name-input")
const messages = document.querySelector('#messages');
const userName = document.querySelector("#name")
const mainDiv = document.querySelector("#maiv-div");
const enterNameDiv = document.querySelector("#enter-name-div");
document.querySelector("#save-name-button").addEventListener("click", () => {
  userName.innerText = nameInput.value;
  mainDiv.style.display = "block"
  enterNameDiv.style.display = "none"
createSocket();
  socketIo.emit('nameSet', nameInput.value);
})


const messageInput = document.querySelector('#messageInput');

document.querySelector('#messageForm').addEventListener('submit', e => {
  e.preventDefault();
  socketIo.emit('msg', messageInput.value);
});
function createSocket() {
  socketIo = io();
  socketIo.on('msg', msg => {
    messages.innerHTML += `<div>${msg}</div>`;
  });
}

