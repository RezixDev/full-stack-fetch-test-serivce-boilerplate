export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Ingredient {
  name: string;
  tags: string[];
  nutrition: Nutrition;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  tags: string[];
  nutrition: Nutrition;
}
