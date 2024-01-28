import { DBConnectionFactory } from "../../base/db-connection-factory-method";
import { DbSqlite } from "./db.sqlite";

export class DbSqliteConnectionCreator extends DBConnectionFactory {
  public createInstance(config: { filename: string }): DbSqlite {
    return new DbSqlite(config);
  }
}