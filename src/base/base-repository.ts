import { BaseEntity } from "./base-entity";
import {BaseModelDAO} from "./base-model-dao";

export abstract class BaseRepository<Model extends BaseEntity, ReturnType = any> {
  protected constructor(protected dao: BaseModelDAO<Model, ReturnType>) {}

  async createItem(item: Model): Promise<ReturnType> {
    return this.dao.create(item);
  }

  async deleteItem(id: number): Promise<ReturnType> {
    return this.dao.delete(id);
  }

  async findExactlyOne(id: number): Promise<ReturnType> {
    return this.dao.getOneById(id);
  }
  async update(id: number, item: Model): Promise<ReturnType> {
    return this.dao.update(id, item);
  }
}