(function() {
    const form = document.getElementById("recipe-search");
    const recipesEl = document.getElementById("recipes");
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=Irish&diet=Gluten Free
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
    
      const formData = new FormData(event.target);
      const cuisine = formData.get("cuisine");
      const diet = formData.get("diet");
    
      const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}`);
      const apiBody = await apiResponse.json();
    
      console.log(apiBody.results);
      recipesEl.innerHTML = "";
      apiBody.results.forEach(createRecipe);
    });
    
    function createRecipe(recipe) {
      const recipeEl = document.createElement("div");
      recipeEl.addEventListener("click",()=>{
        favorites.addFavorite(recipe)
      })
    
      const recipeNameEl = document.createElement("div");
      recipeNameEl.textContent = recipe.title;
      recipeEl.appendChild(recipeNameEl);
    
      const recipeImageEL = document.createElement("img");
      recipeImageEL.src = recipe.image;
      recipeEl.appendChild(recipeImageEL);
    
      recipesEl.appendChild(recipeEl);
    }
    })();
    