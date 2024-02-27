const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.getElementById("meal-details-content");
const recipeCloseButton = document.getElementById("recipe-close-button");

searchBtn.addEventListener("click", getMealList);
getMealList.addEventListener("click", getMealRecipe);
recipeCloseButton.addEventListener("click", () => {
    mealDetailsContent.parentElement.classList.remove("showRecipe");
});

function getMealList() {
    let searchInputTxt = document.getElementById("search-input").value.trim();
    
}