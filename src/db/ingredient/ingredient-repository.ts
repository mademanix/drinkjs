import {BaseRepository} from "../../base/base-repository";
import {IngredientModel} from "./ingredient-model";
import {BaseModelDAO} from "../../base/base-model-dao";

export class IngredientRepository<ReturnType> extends BaseRepository<IngredientModel, ReturnType> {
  constructor(protected dao: BaseModelDAO<IngredientModel, ReturnType>) {
    super(dao);
  }
}