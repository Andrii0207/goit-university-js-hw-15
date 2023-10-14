const scrollTextSize = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

scrollTextSize.addEventListener("input", changeTextSize)

function changeTextSize(e) {
    text.style.fontSize = `${e.currentTarget.value}px`
}