import { Module } from '@nestjs/common';
import { TheCocktailDbIngredientService } from './the-cocktail-db-ingredient.service';
import { TheCocktailDbIngredientController } from './the-cocktail-db-ingredient.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [TheCocktailDbIngredientController],
  providers: [TheCocktailDbIngredientService],
})
export class TheCocktailDbIngredientModule {}
