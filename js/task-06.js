const input = document.querySelector("#validation-input")

input.addEventListener("blur", handler)


function handler(text) {

    const enterText = text.currentTarget;
    const dataSetLength = Number(enterText.dataset.length);

    if (enterText.value.length === dataSetLength) {
        input.classList.add("valid")
        input.classList.remove("invalid")
        return;
    }
    input.classList.add("invalid")
    input.classList.remove("valid")
    return;
}