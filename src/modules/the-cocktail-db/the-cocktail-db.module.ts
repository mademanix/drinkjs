import { Module } from '@nestjs/common';
import {TheCocktailDbIngredientModule} from "./ingredient/the-cocktail-db-ingredient.module";

@Module({
  imports: [TheCocktailDbIngredientModule],
  controllers: [],
  providers: [],
})
export class TheCocktailDbModule {}
