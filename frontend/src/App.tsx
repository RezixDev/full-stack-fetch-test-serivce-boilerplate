import React, { useEffect, useState } from 'react';
import RecipeCard from './components/RecipeCard';
import { fetchRecipes } from './services/api';
import type { Recipe } from '../../models/Recipe';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes(['Vegan'])
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Recipe Recommendations</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.name} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
