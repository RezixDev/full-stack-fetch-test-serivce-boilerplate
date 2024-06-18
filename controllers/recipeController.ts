import type { Recipe } from '../models/Recipe';

// Mock data
const recipes: Recipe[] = [
  {
    name: 'Vegan Rice Bowl',
    ingredients: [
      {
        name: 'Rice',
        tags: ['Vegan'],
        nutrition: { calories: 200, protein: 4, fat: 0.5, carbs: 45 },
      },
      {
        name: 'Onions',
        tags: ['Vegan'],
        nutrition: { calories: 40, protein: 1, fat: 0.1, carbs: 9 },
      },
      {
        name: 'Garlic',
        tags: ['Vegan'],
        nutrition: { calories: 10, protein: 0.2, fat: 0.1, carbs: 2 },
      },
      {
        name: 'Paprika',
        tags: ['Vegan'],
        nutrition: { calories: 25, protein: 1, fat: 0.2, carbs: 5 },
      },
      {
        name: 'Olive Oil',
        tags: ['Vegan'],
        nutrition: { calories: 120, protein: 0, fat: 14, carbs: 0 },
      },
    ],
    tags: ['Vegan'],
    nutrition: {
      calories: 395,
      protein: 6.2,
      fat: 15.1,
      carbs: 61,
    },
  },
  // Add more recipes as needed
];

export const getRecipes = (tags: string[]): Recipe[] => {
  return recipes.filter((recipe) =>
    tags.every((tag) => recipe.tags.includes(tag))
  );
};
