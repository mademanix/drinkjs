import {BaseEntity} from "../../base/base-entity";

export interface IngredientModel extends BaseEntity {
  name: string;
  createdAt: string;
  alcohol: boolean;
}