import {Controller, Get, Header, Param} from '@nestjs/common';
import { TheCocktailDbService } from './the-cocktail-db.service';
import {IngredientsCollection} from "./interfaces/cocktail-api-junk-interfaces";
import {IngredientEntity} from "./interfaces/ingredient.entity";
import {Observable} from "rxjs";

@Controller('the-cocktail-db/ingredient')
export class TheCocktailDbController {
  constructor(private readonly theCocktailDbService: TheCocktailDbService) {}
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
  @Header('Content-Type', 'image/png')
  public getIngredientThumbnail(@Param('name') name: string): Observable<Blob> {
    return this.theCocktailDbService.getIngredientThumbnail(name).pipe(
    );
  }
}
