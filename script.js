// Mock data for recipes with details
const recipes = [
    { 
      id: 1, 
      title: "Pasta Carbonara", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan Cheese", "Black Pepper"],
      instructions: ["Cook spaghetti according to package instructions.", "In a separate pan, cook bacon until crispy.", "Mix eggs and Parmesan cheese in a bowl.", "Add cooked spaghetti to the bacon pan, then pour the egg mixture over spaghetti.", "Stir well until the eggs are cooked and the sauce is creamy.", "Serve with black pepper and additional Parmesan cheese."],
    },
    { 
      id: 2, 
      title: "Chicken Curry", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Chicken", "Coconut Milk", "Curry Paste", "Onion", "Garlic", "Ginger", "Vegetable Oil", "Salt"],
      instructions: ["Heat vegetable oil in a pan, then add chopped onion, garlic, and ginger.", "Once the onion becomes translucent, add chicken pieces and cook until browned.", "Add curry paste and cook for a few minutes.", "Pour in coconut milk and simmer until the chicken is cooked through.", "Season with salt to taste.", "Serve hot with rice."],
    },
    { 
      id: 3, 
      title: "Chocolate Cake", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Flour", "Sugar", "Cocoa Powder", "Baking Powder", "Baking Soda", "Salt", "Eggs", "Milk", "Vegetable Oil", "Vanilla Extract", "Boiling Water"],
      instructions: ["Preheat oven to 350°F (175°C).", "Grease and flour two 9-inch round baking pans.", "In a large bowl, combine flour, sugar, cocoa powder, baking powder, baking soda, and salt.", "Add eggs, milk, oil, and vanilla to the dry ingredients and mix until well combined.", "Stir in boiling water until the batter is smooth.", "Pour the batter evenly into the prepared pans.", "Bake for 30 to 35 minutes or until a toothpick inserted into the center comes out clean.", "Allow cakes to cool in pans for 10 minutes, then remove from pans and cool completely on wire racks.", "Frost with your favorite chocolate frosting and enjoy!"],
    },
    { 
      id: 4, 
      title: "Lasagna", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Lasagna Noodles", "Ground Beef", "Onion", "Garlic", "Tomato Sauce", "Crushed Tomatoes", "Dried Basil", "Dried Oregano", "Salt", "Pepper", "Ricotta Cheese", "Mozzarella Cheese", "Parmesan Cheese"],
      instructions: ["Preheat oven to 375°F (190°C).", "In a large skillet, cook ground beef, onion, and garlic over medium heat until beef is browned.", "Stir in tomato sauce, crushed tomatoes, basil, oregano, salt, and pepper.", "Simmer for 10 minutes, stirring occasionally.", "In a separate bowl, combine ricotta cheese, mozzarella cheese, and Parmesan cheese.", "Spread a thin layer of meat sauce in the bottom of a 9x13-inch baking dish.", "Arrange a single layer of lasagna noodles over the sauce.", "Spread a layer of cheese mixture over the noodles.", "Repeat layers until all ingredients are used, ending with a layer of meat sauce on top.", "Cover with aluminum foil and bake for 25 minutes.", "Remove foil and bake for an additional 25 minutes, or until bubbly and golden brown.", "Let stand for 15 minutes before serving."],
    },
    { 
      id: 5, 
      title: "Caesar Salad", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
      instructions: ["Wash and dry the romaine lettuce leaves.", "Tear the leaves into bite-sized pieces and place them in a large salad bowl.", "Add croutons and Parmesan cheese to the bowl.", "Drizzle Caesar dressing over the salad, then toss gently to coat all the ingredients.", "Serve immediately as a side dish or add grilled chicken or shrimp for a main course."],
    },
    { 
      id: 6, 
      title: "Spaghetti Bolognese", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Spaghetti", "Ground Beef", "Onion", "Garlic", "Tomato Sauce", "Crushed Tomatoes", "Red Wine", "Beef Stock", "Dried Basil", "Dried Oregano", "Salt", "Pepper", "Olive Oil", "Parmesan Cheese"],
      instructions: ["Cook spaghetti according to package instructions.", "In a large skillet, heat olive oil over medium heat.", "Add onion and garlic, and cook until softened.", "Add ground beef and cook until browned, breaking it up with a spoon.", "Stir in tomato sauce, crushed tomatoes, red wine, beef stock, basil, oregano, salt, and pepper.", "Simmer for 30 minutes, stirring occasionally.", "Serve over cooked spaghetti with grated Parmesan cheese."],
    },
    { 
      id: 7, 
      title: "Cheeseburger", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Ground Beef", "Hamburger Buns", "Cheddar Cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard", "Salt", "Pepper"],
      instructions: ["Divide ground beef into equal-sized patties.", "Season patties with salt and pepper.", "Heat a grill or skillet over medium-high heat.", "Cook patties for 4-5 minutes on each side, or until desired doneness.", "During the last minute of cooking, add cheese slices on top of each patty and let them melt.", "Toast hamburger buns on the grill or in a toaster.", "Assemble burgers by placing lettuce, tomato, onion, pickles, and cooked patties on the bottom half of each bun.", "Spread ketchup and mustard on the top half of each bun.", "Serve hot and enjoy!"],
    },
    { 
      id: 8, 
      title: "Apple Pie", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Pie Crust", "Apples", "Sugar", "Brown Sugar", "Cinnamon", "Nutmeg", "Butter"],
      instructions: ["Preheat oven to 425°F (220°C).", "Line a 9-inch pie dish with one pie crust.", "Peel, core, and slice apples.", "In a large bowl, toss apples with sugar, brown sugar, cinnamon, and nutmeg.", "Pour apple mixture into pie crust, then dot with butter.", "Cover with the second pie crust, seal and crimp edges.", "Cut slits in the top crust to vent.", "Bake for 40-45 minutes, or until crust is golden brown and filling is bubbly.", "Cool before serving."],
    },
    { 
      id: 9, 
      title: "Mushroom Risotto", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Arborio Rice", "Mushrooms", "Onion", "Garlic", "White Wine", "Vegetable Stock", "Butter", "Parmesan Cheese", "Salt", "Pepper"],
      instructions: ["In a large skillet, melt butter over medium heat.", "Add chopped onion and garlic, and cook until softened.", "Add sliced mushrooms and cook until they release their liquid.", "Stir in arborio rice and cook for a few minutes until translucent.", "Pour in white wine and cook until evaporated.", "Gradually add vegetable stock, stirring constantly, until rice is creamy and cooked through.", "Stir in grated Parmesan cheese, salt, and pepper to taste.", "Serve hot and enjoy!"],
    },
    { 
      id: 10, 
      title: "Sushi Rolls", 
      image: "assets/pexels-photo-1640777.jpeg",
      ingredients: ["Sushi Rice", "Nori Seaweed Sheets", "Fish (e.g., Tuna, Salmon)", "Vegetables (e.g., Cucumber, Avocado, Carrot)", "Soy Sauce", "Wasabi", "Pickled Ginger"],
      instructions: ["Cook sushi rice according to package instructions and let it cool.", "Place a nori seaweed sheet on a bamboo sushi mat.", "Spread a layer of sushi rice over the nori, leaving a border at the top edge.", "Arrange fish and vegetables in a line across the center of the rice.", "Roll the sushi tightly using the bamboo mat, sealing the edge with water.", "Slice the roll into bite-sized pieces with a sharp knife.", "Serve with soy sauce, wasabi, and pickled ginger."],
    },
  ];
  
  
  // Function to display recipes
  function displayRecipes(recipesToShow) {
    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = ""; // Clear previous content
    recipesToShow.forEach(recipe => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
      `;
      mainContent.appendChild(recipeCard);
    });
  }
  
  // Function to view a recipe
  function viewRecipe(recipeId) {
    window.location.href = `recipe.html?id=${recipeId}`;
  }
  
  // Function to fetch and display recipe details
  function displayRecipeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (recipe) {
      const recipeDetails = document.getElementById("recipeDetails");
      recipeDetails.innerHTML = `
        <div class="recipe-card">
          <img src="${recipe.image}" alt="${recipe.title}">
          <h2>${recipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
        </div>
      `;
    } else {
      alert("Recipe not found!");
      goBack(); // Redirect to home page if recipe not found
    }
  }
  
  // Function to navigate back to the home page
  function goBack() {
    window.location.href = "index.html";
  }
  
  // Function to filter recipes based on search input
  function searchRecipes() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
  }
  
  // Initialize the application
  if (window.location.pathname.includes("recipe.html")) {
    // If current page is recipe.html, display recipe details
    displayRecipeDetails();
  } else {
    // Otherwise, display list of recipes
    displayRecipes(recipes);
  }
  
  // Function to search and filter recipes
function searchRecipes() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
}
document.getElementById("searchInput").addEventListener("input", searchRecipes);
