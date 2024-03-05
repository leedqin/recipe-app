const mockRecipes = [
    {
        id: 1,
        title: "Chicken Tikka Masala",
        description: "A flavorful chicken dish in a creamy tomato sauce, spiced with traditional Indian spices.",
        ingredients: ["2 lbs chicken breast", "1 cup yogurt", "1 tablespoon garam masala", "2 cups tomato puree", "1 onion", "2 cloves garlic", "1 cup heavy cream"],
        instructions: ["Marinate chicken with yogurt and spices", "Sauté onions and garlic", "Add tomato puree and chicken", "Simmer until cooked", "Stir in heavy cream"]
      },
      {
        id: 2,
        title: "Chicken Stir Fry",
        description: "A quick and easy dish with chicken and fresh vegetables, tossed in a savory sauce.",
        ingredients: ["1 lb chicken breast", "2 cups mixed vegetables", "2 tablespoons soy sauce", "1 tablespoon olive oil", "1 teaspoon sesame seeds"],
        instructions: ["Cook chicken in oil", "Add vegetables and sauté", "Pour soy sauce", "Sprinkle with sesame seeds"]
      },
      {
        id: 3,
        title: "Vegetarian Pizza",
        description: "A delicious pizza topped with a colorful array of vegetables and mozzarella cheese.",
        ingredients: ["Pizza dough", "1/2 cup pizza sauce", "2 cups shredded mozzarella cheese", "1 bell pepper", "1/2 red onion", "1/4 cup sliced olives", "1/2 cup sliced mushrooms"],
        instructions: ["Spread sauce on dough", "Add cheese and toppings", "Bake at 475°F for 12-15 minutes"]
      },
      {
        id: 4,
        title: "Beef Stroganoff",
        description: "Tender beef in a rich and creamy mushroom sauce, served over a bed of egg noodles.",
        ingredients: ["1 lb beef sirloin", "2 cups mushrooms", "1 onion", "1 cup beef broth", "1 cup sour cream", "Egg noodles"],
        instructions: ["Brown beef", "Sauté mushrooms and onion", "Add broth and simmer", "Stir in sour cream", "Serve over noodles"]
      },
      {
        id: 5,
        title: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish with a meaty tomato sauce.",
        ingredients: ["1 lb ground beef", "1 can tomato sauce", "1 onion", "2 cloves garlic", "1 teaspoon Italian seasoning", "Spaghetti pasta"],
        instructions: ["Cook beef with onions and garlic", "Add tomato sauce and seasoning", "Simmer", "Serve over cooked spaghetti"]
      },
      {
        id: 6,
        title: "Chicken Caesar Salad",
        description: "Crisp romaine lettuce tossed with Caesar dressing, topped with grilled chicken, croutons, and parmesan cheese.",
        ingredients: ["Romaine lettuce", "Caesar dressing", "1 lb chicken breast", "Croutons", "Parmesan cheese"],
        instructions: ["Grill chicken", "Toss lettuce with dressing", "Top with chicken, croutons, and cheese"]
      },
      {
        id: 7,
        title: "Butternut Squash Soup",
        description: "A creamy and comforting soup made with roasted butternut squash, perfect for chilly evenings.",
        ingredients: ["1 butternut squash", "1 onion", "4 cups vegetable broth", "1 cup heavy cream", "Salt and pepper"],
        instructions: ["Roast squash", "Sauté onion", "Blend squash and onion with broth", "Simmer", "Stir in cream"]
      },
      {
        id: 8,
        title: "Chicken Alfredo Pasta",
        description: "Pasta in a creamy Alfredo sauce with grilled chicken breast.",
        ingredients: ["1 lb chicken breast", "1 cup Alfredo sauce", "Pasta", "1 tablespoon olive oil", "Parmesan cheese"],
        instructions: ["Grill chicken", "Cook pasta", "Toss pasta with sauce and chicken", "Serve with Parmesan"]
      },
      {
        id: 9,
        title: "Chicken Parmesan",
        description: "Breaded chicken breast covered in marinara sauce and melted cheese, served with pasta.",
        ingredients: ["1 lb chicken breast", "1 cup breadcrumbs", "1 egg", "1 cup marinara sauce", "1 cup mozzarella cheese", "Pasta"],
        instructions: ["Bread chicken", "Fry until golden", "Top with sauce and cheese", "Bake", "Serve with pasta"]
      },
    {
      id: 10,
      title: "Spaghetti Carbonara",
      description: "A quick and comforting Italian dish with a creamy egg sauce, crispy pancetta, and grated cheese.",
      ingredients: [
        "Spaghetti pasta - 400g",
        "Pancetta or bacon - 150g, diced",
        "Eggs - 3 large",
        "Parmesan cheese - 3/4 cup, grated",
        "Garlic - 1 clove, minced",
        "Salt - to taste",
        "Black pepper - to taste"
      ],
      instructions: [
        "Cook the spaghetti in salted boiling water until al dente. Reserve 1/2 cup pasta water before draining.",
        "In a pan, cook the pancetta with garlic until crispy. Remove the garlic clove.",
        "In a bowl, whisk together eggs, cheese, and black pepper.",
        "Toss the hot spaghetti with the egg mixture, adding pasta water to create a creamy sauce.",
        "Mix in the pancetta, adjust salt and pepper, and serve immediately with extra cheese."
      ]
    },
    {
      id:11 ,
      title: "Margherita Pizza",
      description: "A simple and classic Neapolitan pizza with a delicate balance of flavors from fresh basil, mozzarella cheese, and tomatoes.",
      ingredients: [
        "Pizza dough - 1 ball",
        "San Marzano tomatoes - 200g, crushed",
        "Fresh mozzarella cheese - 125g, sliced or torn",
        "Fresh basil leaves - a handful",
        "Extra-virgin olive oil - 2 tbsp",
        "Salt - to taste"
      ],
      instructions: [
        "Preheat your oven to the highest setting, with a pizza stone or baking sheet inside.",
        "On a floured surface, stretch out the pizza dough to a 12-inch circle.",
        "Spread the crushed tomatoes over the dough, leaving the edges clear for the crust.",
        "Distribute the mozzarella slices evenly over the tomato sauce.",
        "Bake in the oven for 5-7 minutes until the crust is golden and cheese is bubbly.",
        "Garnish with fresh basil leaves and a drizzle of olive oil before serving."
      ]
    },
  ];
  

  export default mockRecipes;