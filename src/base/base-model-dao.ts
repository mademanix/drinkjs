import {BaseEntity} from "./base-entity";
import {BaseDAO} from "./base-dao";
import {DBProvider} from "./db-provider";
import {ConsoleLogLogger} from "../logger/console-log-logger";
import {LogLevel} from "../logger/log-level";

export class BaseModelDAO<Model extends BaseEntity, ReturnType> implements BaseDAO<Model, ReturnType> {
  private logger: ConsoleLogLogger = new ConsoleLogLogger();
  constructor(private dbProvider: DBProvider<unknown, ReturnType>, protected tableName: string) {
    if(!tableName?.length) {
      throw new Error('[BaseModelDAO] please provide table name!')
    }
    this.logger.setLogLevel(LogLevel.ALL);
  }
  public async create(item: Model): Promise<ReturnType> {
    const query = `INSERT INTO ${this.tableName} (${this.spreadColumnsFromModel(item)}) VALUES (${this.spreadValuesFromModel(item)})`;
    try {
      this.logger.log('[BaseModelDAO] exec query: ' + query);
      return await this.dbProvider.execQuery(query);
    } catch (error) {
      this.logger.error('[BaseModelDAO] exec query error: ' + error);
      throw error;
    }
  }

  public async delete(id: number): Promise<ReturnType> {
    const query = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
    try {
      this.logger.log('[BaseModelDAO] exec query: ' + query);
      return await this.dbProvider.execQuery(query);
    } catch (error) {
      this.logger.error('[BaseModelDAO] exec query error: ' + error);
      throw error;
    }
  }

  public async getAll(): Promise<ReturnType> {
    const query = `SELECT * FROM ${this.tableName}`;
    try {
      this.logger.log('[BaseModelDAO] exec query: ' + query);
      return await this.dbProvider.execQuery(query);
    } catch (error) {
      this.logger.error('[BaseModelDAO] exec query error: ' + error);
      throw error;
    }
  }

  public async getOneById(id: number): Promise<ReturnType> {
    const query = `SELECT * FROM ${this.tableName} WHERE id = ${id}`;
    try {
      this.logger.log('[BaseModelDAO] exec query: ' + query);
      return await this.dbProvider.execQuery(query);
    } catch (error) {
      this.logger.error('[BaseModelDAO] exec query error: ' + error);
      throw error;
    }
  }

  public async update(id: number, item: Model): Promise<ReturnType> {
    const query = `UPDATE ${this.tableName} SET ${this.spreadColumnsAndValuesFromModel(item)} WHERE id = ${id}`;
    try {
      this.logger.log('[BaseModelDAO] exec query: ' + query);
      return await this.dbProvider.execQuery(query);
    } catch (error) {
      this.logger.error('[BaseModelDAO] exec query error: ' + error);
      throw error;
    }
  }

  protected spreadColumnsFromModel(model: Model): string {
    return Object.keys(model).join(',');
  }

  protected spreadValuesFromModel(model: Model): string {
    return Object.values(model).map((value) => `"${value}"`).join(',');
  }

  protected spreadColumnsAndValuesFromModel(model: Model): string {
    return Object.entries(model)
      .filter(([key, ]) => key !== 'id')
      .map(([key, value]) => `${key}="${value}"`)
      .join(',');
  }
}