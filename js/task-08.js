
const form = document.querySelector(".login-form")

form.addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault()

    const { email, password } = e.currentTarget.elements;

    if ((email.value && password.value) === "") {
        return alert("Please, fill off all form fields")
    }

    const formData = new FormData(e.currentTarget)
    const formValues = {}

    formData.forEach((value, key) => formValues[key] = value)

    console.log(formValues)
    e.currentTarget.reset()
}