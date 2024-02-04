import { Module } from '@nestjs/common';
import { TheCocktailDbService } from './the-cocktail-db.service';
import { TheCocktailDbController } from './the-cocktail-db.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [TheCocktailDbController],
  providers: [TheCocktailDbService],
})
export class TheCocktailDbModule {}
