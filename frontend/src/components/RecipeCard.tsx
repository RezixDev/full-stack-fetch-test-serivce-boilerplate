import React from 'react';

interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

interface RecipeCardProps {
  name: string;
  tags: string[];
  nutrition: Nutrition;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, tags, nutrition }) => (
  <div className='p-4 border rounded'>
    <h2 className='text-xl font-bold'>{name}</h2>
    <p>Tags: {tags.join(', ')}</p>
    <p>Calories: {nutrition.calories}</p>
    <p>Protein: {nutrition.protein}g</p>
    <p>Fat: {nutrition.fat}g</p>
    <p>Carbs: {nutrition.carbs}g</p>
  </div>
);

export default RecipeCard;
