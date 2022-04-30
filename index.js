const display = document.getElementById("display");
const drumpads = document.querySelectorAll(".drum-pad");

window.addEventListener("keydown", onKeydown);
drumpads.forEach(drumpad => drumpad.addEventListener("click", onClick));

function onKeydown(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
  display.innerText = audio.parentElement.id;
}

function onClick(e) {
  const drumEl = e.target.childNodes[1];
  drumEl.play();
  display.innerText = drumEl.parentElement.id;
}
