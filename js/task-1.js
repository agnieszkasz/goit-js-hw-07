const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
const getCategoryAndElements = (elem) => {
  const category = elem.querySelector("h2").textContent;
  const quan = elem.querySelectorAll("li").length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${quan}`);
};
const items = document.querySelectorAll("#categories .item");
console.log(items.length);
items.forEach((item) => getCategoryAndElements(item));
