const categories = document.querySelector("#categories")

const categoriesArray = [...categories.children];

console.log("Number of categories:", categoriesArray.length)

categoriesArray.forEach(el => {
    const categoryName = el.firstElementChild.innerText
    const listItem = el.lastElementChild;

    console.log("Category:", categoryName)
    console.log("Elements:", listItem.children.length)
})