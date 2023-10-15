const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const root = document.querySelector("#ingredients")

const list = ingredients.map(ingredient => {

  const item = document.createElement('li')
  item.textContent = ingredient;

  return item;
})

root.append(...list)
