(function() {
const form = document.getElementById("menu-item-search");
const restaurantsEl = document.getElementById("restaurants");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const itemName = formData.get("item-name");

  const apiResponse = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${itemName}`);
  const apiBody = await apiResponse.json();

  console.log(apiBody.menuItems);
  restaurantsEl.innerHTML = "";
  apiBody.menuItems.forEach(createMenuItem);
});

function createMenuItem(menuItem) {
  const menuItemEl = document.createElement("div");

  const menuItemNameEl = document.createElement("div");
  menuItemNameEl.textContent = menuItem.title;
  menuItemEl.appendChild(menuItemNameEl);

  const menuItemRestaurantEl = document.createElement("div");
  menuItemRestaurantEl.textContent = menuItem.restaurantChain;
  menuItemEl.appendChild(menuItemRestaurantEl);

  const menuItemImageEL = document.createElement("img");
  menuItemImageEL.src = menuItem.image;
  menuItemEl.appendChild(menuItemImageEL);

  restaurantsEl.appendChild(menuItemEl);
}
})();
