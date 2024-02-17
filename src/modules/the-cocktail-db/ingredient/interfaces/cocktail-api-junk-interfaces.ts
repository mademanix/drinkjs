import {TheCocktailDbEntity} from "../entities/the-cocktail-db.entity";

export interface AllIngredientsNameJunkResponse {
  drinks: {strIngredient1: string}[];
}

export type IngredientsCollection = string[];

export interface OneIngredientJunkResponse {
  ingredients: TheCocktailDbEntity[];
}