import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {COCKTAIL_API_RESOURCES} from "./resources/cocktail-api.resources";
import {firstValueFrom, map, Observable, tap} from "rxjs";
import {TheCocktailDbEntity} from "./entities/the-cocktail-db.entity";
import {
  AllIngredientsNameJunkResponse,
  IngredientsCollection,
  OneIngredientJunkResponse
} from "./interfaces/cocktail-api-junk-interfaces";
import {ExternalIngredientEntityMapper} from "./helpers/external-ingredient-entity.mapper";
import {IngredientEntity} from "./interfaces/ingredient.entity";

const MAX_INGREDIENT_ID: number = 616;
@Injectable()
export class TheCocktailDbService {

  constructor(private readonly httpService: HttpService) {}
  public getAllIngredientsName(): Observable<IngredientsCollection> {
    return this.httpService.get<AllIngredientsNameJunkResponse>(COCKTAIL_API_RESOURCES.INGREDIENTS.getAllIngredientsName).pipe(
      map(({data}) => data.drinks.map(ingredient => ingredient.strIngredient1))
    );
  }

  public findOneById(id: number): Observable<IngredientEntity> {
    if(id > MAX_INGREDIENT_ID || typeof id !== 'number') {
      return null;
    }

    return this.httpService.get<OneIngredientJunkResponse>(COCKTAIL_API_RESOURCES.INGREDIENTS.selectById(id)).pipe(
        map(({data}) =>
          data.ingredients?.length ?
            ExternalIngredientEntityMapper.parseForDBIngredientEntity(data.ingredients[0]) :
            null
        ),
      )
  }

  public findOneByIngredientName(name: string): Observable<IngredientEntity> {
    if(!name?.length || typeof name !== 'string') {
      return null;
    }

    return this.httpService.get<OneIngredientJunkResponse>(COCKTAIL_API_RESOURCES.INGREDIENTS.selectByName(name)).pipe(
        map(({data}) =>
          data.ingredients?.length ?
            ExternalIngredientEntityMapper.parseForDBIngredientEntity(data.ingredients[0]) :
            null
        ),
      )
  }

  public getIngredientThumbnail(name: string): Observable<Blob> {
    if(!name?.length || typeof name !== 'string') {
      return null;
    }

    return this.httpService.get<Blob>(COCKTAIL_API_RESOURCES.INGREDIENTS.getIngredientThumbnail(name))
      .pipe(map(({data}) => data))
  }
}
