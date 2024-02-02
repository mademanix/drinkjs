import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Ingredient} from "./entities/ingredient.entity";

@Module({
  imports: [SequelizeModule.forFeature([Ingredient])],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule {}
