const decrementEl = document.querySelector("button[data-action=decrement]")
const incrementEl = document.querySelector("button[data-action=increment]")
const value = document.querySelector("#value")

let step = 0;


decrementEl.addEventListener("click", handlerClick)
incrementEl.addEventListener("click", handlerClick)

let counter = 0;

function handlerClick(evt) {

    const action = evt.currentTarget.dataset.action;

    switch (action) {
        case ("decrement"):
            counter -= 1;
            value.textContent = counter;
            break;
        case ("increment"):
            counter += 1;
            value.textContent = counter;
            break;
        default: value.textContent = counter;
    }
}