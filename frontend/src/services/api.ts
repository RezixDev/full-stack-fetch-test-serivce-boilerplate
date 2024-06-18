import type { Recipe } from '../../../models/Recipe';

export const fetchRecipes = async (tags: string[]): Promise<Recipe[]> => {
  const response = await fetch(
    `http://localhost:3000/api/recipes?tags=${tags.join(',')}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Recipe[] = await response.json();
  return data;
};
