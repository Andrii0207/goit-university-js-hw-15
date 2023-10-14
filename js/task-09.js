function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body")
}

refs.button.addEventListener("click", onChangeColor)

function onChangeColor() {

  const { body, color, button } = refs

  const randonColor = getRandomHexColor()

  color.textContent = randonColor;

  body.style.backgroundColor = randonColor;
  button.style.backgroundColor = "transparent";

}