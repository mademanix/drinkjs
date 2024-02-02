import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Ingredient} from "./entities/ingredient.entity";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [SequelizeModule.forFeature([Ingredient]), HttpModule],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule {}
