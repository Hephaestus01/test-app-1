var cocktailName = "";
var cocktailIngredients = "";
var cocktailInstructions = "";
var cocktailURL = "";

function loadCocktailRecipe() {
    var loadedCocktail = JSON.parse(localStorage.getItem("cocktail"));
    cocktailURL = JSON.parse(localStorage.getItem("cocktailUrl"))
    cocktailName = loadedCocktail[0];
    cocktailIngredients = loadedCocktail[1];
    cocktailInstructions = loadedCocktail[2];

    displayCocktail();
}

function displayCocktail() {
    document.querySelector("#cocktail-name").textContent = cocktailName.toUpperCase();
    document.querySelector("#cocktail-image").src = cocktailURL;

    for (var i = 0; i < cocktailIngredients.length; i++) {
        var ingredientItem = document.createElement("li")
        ingredientItem.textContent = cocktailIngredients[i];
        document.querySelector("#ingredients-list").appendChild(ingredientItem)
    };
    document.querySelector("#instructions").textContent = cocktailInstructions
    console.log(cocktailInstructions)
}


loadCocktailRecipe();