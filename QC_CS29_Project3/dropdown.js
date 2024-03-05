// JavaScript code to enable dropdown functionality
// main
document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown buttons
    var dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Loop through the dropdown buttons
    dropdownButtons.forEach(function(button) {
        // Add click event listener to each dropdown button
        button.addEventListener("click", function() {
            // Toggle the active class to show/hide the dropdown content
            this.classList.toggle("active");

            // Get the sibling element (dropdown content)
            var dropdownContent = this.nextElementSibling;

            // Toggle the display style of the dropdown content
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });
});

const recipes = [
    {id: "pancakes", name: "Pancake Recipe", categoryID: "easy_breakfast", category: "Easy Breakfast Recipies", difficultyID: "easy_recipes.html"},
    {id: "scrambled_eggs", name: "Scrambled Eggs Recipe", categoryID: "easy_breakfast", category: "Easy Breakfast Recipies", difficultyID: "easy_recipes.html"},
    {id: "fruit_smoothie", name: "Fruit Smoothie Recipe", categoryID: "easy_breakfast", category: "Easy Breakfast Recipies", difficultyID: "easy_recipes.html"},
    {id: "grilled_cheese", name: "Grilled Cheese Sandwhich Recipe", categoryID: "easy_lunch", category: "Easy Lunch Recipies", difficultyID: "easy_recipes.html"},
    {id: "garden_salad", name: "Garden Salad Recipe", categoryID: "easy_lunch", category: "Easy Lunch Recipies", difficultyID: "easy_recipes.html"},
    {id: "turkey_sandwich", name: "Turkey Sandwich Recipe", categoryID: "easy_lunch", category: "Easy Lunch Recipies", difficultyID: "easy_recipes.html"},
    {id: "spaghetti_pasta", name: "Spaghetti Aglio e Olio Recipe", categoryID: "easy_dinner", category: "Easy Dinner Recipies", difficultyID: "easy_recipes.html"},
    {id: "veg_stir_fry", name: "Vegetable Stir-Fry Recipe", categoryID: "easy_dinner", category: "Easy Dinner Recipies", difficultyID: "easy_recipes.html"},
    {id: "pizza_recipe", name: "Homemade Pizza Recipe", categoryID: "easy_dinner", category: "Easy Dinner Recipies", difficultyID: "easy_recipes.html"},
    {id: "chocolate_brownies", name: "Chocolate Brownies Recipe", categoryID: "easy_dessert", category: "Easy Dissert Recipies", difficultyID: "easy_recipes.html"},
    {id: "fruit_salad", name: "Fresh Fruit Salad Recipe", categoryID: "easy_dessert", category: "Easy Dissert Recipies", difficultyID: "easy_recipes.html"},
    {id: "ice_cream", name: "Homemade Ice Cream Recipe", categoryID: "easy_dessert", category: "Easy Dissert Recipies", difficultyID: "easy_recipes.html"},

    {id: "avacado_toast_with_poached_egg", name: "Avocado Toast with Poached Egg", categoryID: "medium_breakfast", category: "Medium Breakfast Recipies", difficultyID: "medium_recipes.html"},
    {id: "greek_yogurt_parfait", name: "Greek Yogurt Parfait", categoryID: "medium_breakfast", category: "Medium Breakfast Recipies", difficultyID: "medium_recipes.html"},
    {id: "banana_pancakes", name: "Banana Pancakes", categoryID: "medium_breakfast", category: "Medium Breakfast Recipies", difficultyID: "medium_recipes.html"},
    {id: "caprese_salad", name: "Caprese Salad", categoryID: "medium_lunch", category: "Medium Lunch Recipies", difficultyID: "medium_recipes.html"},
    {id: "grilled_chicken_wraps", name: "Grilled Chicken Wraps", categoryID: "medium_lunch", category: "Medium Lunch Recipies", difficultyID: "medium_recipes.html"},
    {id: "vegetable_quinoa_salad", name: "Vegetable Quinoa Salad", categoryID: "medium_lunch", category: "Medium Lunch Recipies", difficultyID: "medium_recipes.html"},
    {id: "lemon_garlic_shrimp", name: "Lemon Garlic Shrimp", categoryID: "medium_dinner", category: "Medium Dinner Recipies", difficultyID: "medium_recipes.html"},
    {id: "spicy_tofu_stir_fry", name: "Spicy Tofu Stir-Fry", categoryID: "medium_dinner", category: "Medium Dinner Recipies", difficultyID: "medium_recipes.html"},
    {id: "chicken_tortilla_soup", name: "Chicken Tortilla Soup", categoryID: "medium_dinner", category: "Medium Dinner Recipies", difficultyID: "medium_recipes.html"},
    {id: "quick_berry_parfait", name: "Quick Berry Parfait", categoryID: "medium_dessert", category: "Medium Dissert Recipies", difficultyID: "medium_recipes.html"},
    {id: "microwave_chocolate_mug_cake", name: "Microwave Chocolate Mug Cake", categoryID: "medium_dessert", category: "Medium Dissert Recipies", difficultyID: "medium_recipes.html"},
    {id: "fruit_sorbet", name: "Fruit Sorbet", categoryID: "medium_dessert", category: "Medium Dissert Recipies", difficultyID: "medium_recipes.html"},

    {id: "eggs_benedict", name: "Eggs Benedict", categoryID: "hard_breakfast", category: "Hard Breakfast Recipies", difficultyID: "hard_recipes.html"},
    {id: "shakshuka", name: "Shakshuka", categoryID: "hard_breakfast", category: "Hard Breakfast Recipies", difficultyID: "hard_recipes.html"},
    {id: "croque_madame", name: "Croque Madame", categoryID: "hard_breakfast", category: "Hard Breakfast Recipies", difficultyID: "hard_recipes.html"},
    {id: "beef_bourguignon", name: "Beef Bourguignon", categoryID: "hard_lunch", category: "Hard Lunch Recipies", difficultyID: "hard_recipes.html"},
    {id: "lobster_risotto", name: "Lobster Risotto", categoryID: "hard_lunch", category: "Hard Lunch Recipies", difficultyID: "hard_recipes.html"},
    {id: "thai_green_curry", name: "Thai Green Curry", categoryID: "hard_lunch", category: "Hard Lunch Recipies", difficultyID: "hard_recipes.html"},
    {id: "beef_wellington", name: "Beef Wellington", categoryID: "hard_dinner", category: "Hard Dinner Recipies", difficultyID: "hard_recipes.html"},
    {id: "coq_au_vin", name: "Coq au Vin", categoryID: "hard_dinner", category: "Hard Dinner Recipies", difficultyID: "hard_recipes.html"},
    {id: "osso_buco", name: "Osso Buco", categoryID: "hard_dinner", category: "Hard Dinner Recipies", difficultyID: "hard_recipes.html"},
    {id: "chocolate_souffle", name: "Chocolate Soufflé", categoryID: "hard_dessert", category: "Hard Dissert Recipies", difficultyID: "hard_recipes.html"},
    {id: "tiramisu", name: "Tiramisu", categoryID: "hard_dessert", category: "Hard Dissert Recipies", difficultyID: "hard_recipes.html"},
    {id: "baklava", name: "Baklava", categoryID: "hard_dessert", category: "Hard Dissert Recipies", difficultyID: "hard_recipes.html"},
]

document.getElementById('search').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchRecipes();
    }
});

function searchRecipes() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('searchResults'); // Get the search results container

    // Clear existing search results
    ul.innerHTML = '';

    // Loop through all recipes and create links for matching ones
    recipes.forEach(function(recipe) {
        if (recipe.name.toUpperCase().indexOf(filter) > -1) {
            li = document.createElement('li');
            a = document.createElement('a');
            a.href = "#" + recipe.id;
            a.textContent = recipe.name;
            li.appendChild(a);
            ul.appendChild(li);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the search input element
    var searchInput = document.getElementById('search');

    // Listen for the input event on the search input field
    searchInput.addEventListener('input', function() {
        // Call a function to update the recommendations based on the current input value
        updateRecommendations(searchInput.value);
    });
});

function updateRecommendations(inputValue) {
    // Declare variables
    var filter, ul, li, a;
    filter = inputValue.toUpperCase();
    ul = document.getElementById('searchResults'); // Get the search results container

    // Clear existing search results
    ul.innerHTML = '';

    // Loop through all recipes and create links for matching ones
    recipes.forEach(function(recipe) {
        if (recipe.name.toUpperCase().indexOf(filter) > -1) {
            li = document.createElement('li');
            a = document.createElement('a');
            a.href = recipe.difficultyID + "#" + recipe.id;
            a.textContent = recipe.name;
            li.appendChild(a);
            ul.appendChild(li);
        }
    });
}