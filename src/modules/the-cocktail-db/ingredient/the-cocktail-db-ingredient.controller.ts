import {Controller, Get, Header, Param} from '@nestjs/common';
import { TheCocktailDbIngredientService } from './the-cocktail-db-ingredient.service';
import {IngredientsCollection} from "./interfaces/cocktail-api-junk-interfaces";
import {IngredientEntity} from "./interfaces/ingredient.entity";
import {Observable} from "rxjs";

@Controller('the-cocktail-db/ingredient')
export class TheCocktailDbIngredientController {
  constructor(private readonly theCocktailDbService: TheCocktailDbIngredientService) {}
  @Get('all')
  public findAll(): Observable<IngredientsCollection> {
    return this.theCocktailDbService.getAllIngredientsName();
  }

  @Get('id/:id')
  public findOneById(@Param('id') id: string): Observable<IngredientEntity> {
    return this.theCocktailDbService.findOneById(+id);
  }

  @Get('name/:name')
  public findOneByName(@Param('name') name: string): Observable<IngredientEntity> {
    return this.theCocktailDbService.findOneByIngredientName(name);
  }

  /// TODO WIP
  @Get('thumbnail/:name')
  public getIngredientThumbnail(@Param('name') name: string): Observable<string> {
    return this.theCocktailDbService.getIngredientThumbnail(name);
  }
}
