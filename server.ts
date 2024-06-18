// server.ts
import { serve } from 'bun';
import { getRecipes } from './controllers/recipeController';

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (url.pathname === '/api/recipes' && req.method === 'GET') {
      const tags = url.searchParams.get('tags')?.split(',') || [];
      console.log('Tags:', tags); // Log the tags
      const recipes = getRecipes(tags);
      console.log('Recipes:', recipes); // Log the recipes
      return new Response(JSON.stringify(recipes), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Add CORS headers
        },
      });
    }

    return new Response('Not Found', {
      status: 404,
      headers: {
        'Access-Control-Allow-Origin': '*', // Add CORS headers
      },
    });
  },
});
