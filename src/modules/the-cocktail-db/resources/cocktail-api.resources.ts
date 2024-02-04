/**
* based on https://www.thecocktaildb.com/api.php
* */

const BASE_URL: string = 'https://www.thecocktaildb.com';
const RESPONSE_TYPE: string = '/api/json';
const API_KEY: string = '/v1/1'; // test API key
export const COCKTAIL_API_RESOURCES = {
  INGREDIENTS: {
    selectById: (ingredientId: number) => BASE_URL + RESPONSE_TYPE + API_KEY + '/lookup.php' + '?iid=' + ingredientId,
    selectByName: (name: string) => BASE_URL + RESPONSE_TYPE + API_KEY + '/search.php' + '?i=' + name,
    getAllIngredientsName: BASE_URL + RESPONSE_TYPE + API_KEY + '/list.php' + '?i=list',
    getIngredientThumbnail:  (name: string) =>  `${BASE_URL}/images/ingredients/${name}.png`
  }
}