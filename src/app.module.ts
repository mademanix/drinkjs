import { Module } from '@nestjs/common';
import {IngredientModule} from "./modules/ingredient/ingredient.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {dbConfig} from "./database/database.config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TheCocktailDbModule} from "./modules/the-cocktail-db/the-cocktail-db.module";

@Module({
  imports: [IngredientModule, TheCocktailDbModule, SequelizeModule.forRoot(dbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
