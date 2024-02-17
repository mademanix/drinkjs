import {TheCocktailDbEntity} from "../entities/the-cocktail-db.entity";
import {IngredientEntity} from "../interfaces/ingredient.entity";

export class ExternalIngredientEntityMapper {
  public static parseForDBIngredientEntity(externalEntity: TheCocktailDbEntity): IngredientEntity {
    return {
      createdAt: new Date().toDateString(),
      name: externalEntity.strIngredient,
      id: +externalEntity.idIngredient,
      alcohol: externalEntity.strAlcohol === 'Yes',
      desc: externalEntity.strDescription,
      type: externalEntity.strType,
      strength: +externalEntity.strABV,
    }
  }
}