const favorites = (function () {
    const favoritesEl=document.getElementById("your-favorites")
    dragMenuItem(favoritesEl)
  const favoritesCache = JSON.parse(localStorage.getItem("favorites") || "[]");
favoritesCache.forEach(createMenuItem)

  function addFavorite(favorite) {
    favoritesCache.push(favorite);
    localStorage.setItem("favorites", JSON.stringify(favoritesCache));
    createMenuItem(favorite)
  }
  function createMenuItem(menuItem) {
    const menuItemEl = document.createElement("div");
    dragMenuItem(menuItemEl, menuItem) 
    const menuItemNameEl = document.createElement("div");
    menuItemNameEl.textContent = menuItem.title;
    menuItemEl.appendChild(menuItemNameEl);

    if (menuItem.restaurantChain) {
      const menuItemRestaurantEl = document.createElement("div");
      menuItemRestaurantEl.textContent = menuItem.restaurantChain;
      menuItemEl.appendChild(menuItemRestaurantEl);
    }

    const menuItemImageEL = document.createElement("img");
    menuItemImageEL.src = menuItem.image;
    menuItemEl.appendChild(menuItemImageEL);

    favoritesEl.appendChild(menuItemEl);
  }
  return {
    addFavorite,
  };
})();
