import { BaseEntity } from "./base-entity";

export interface BaseDAO<Model extends BaseEntity, ReturnType> {
  create(item: Model): Promise<ReturnType>;
  update(id: number, item: Model): Promise<ReturnType>;
  delete(id: number): Promise<ReturnType>;
  getOneById(id: number): Promise<ReturnType>;
  getAll(): Promise<ReturnType>;
}