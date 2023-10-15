function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes")
}

const { input, create, destroy, boxesContainer } = refs;

create.addEventListener("click", createNewEl)
destroy.addEventListener("click", clearNewEl)

function createNewEl() {
  createBoxes(input.value);
}


function createBoxes(amount) {

  const newElArray = [];

  for (let i = 1; i <= amount; i += 1) {

    const newEl = document.createElement("div");
    newEl.style.width = `${20 + i * 10}px`;
    newEl.style.height = `${20 + i * 10}px`;
    newEl.style.backgroundColor = `${getRandomHexColor()}`;

    newElArray.push(newEl)
  }
  boxesContainer.append(...newElArray)
}

function clearNewEl() {
  boxesContainer.innerHTML = ""
  input.value = ""
}