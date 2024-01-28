import { DbSqliteConnectionCreator } from "../db/sqlite/db-sqlite-connection-creator";
import { DbSqlite } from "../db/sqlite/db.sqlite";

export class DatabaseSQLiteSingleton {
  private static sqliteInstance: DatabaseSQLiteSingleton;
  public sqliteConnection: DbSqlite;

  private constructor(filename: string) {
    const sqliteConnectionCreator = new DbSqliteConnectionCreator();
    this.sqliteConnection = sqliteConnectionCreator.createInstance({filename});
  }

  public static getInstance(filename: string): DatabaseSQLiteSingleton {
    if(!this.sqliteInstance) {
      this.sqliteInstance = new DatabaseSQLiteSingleton(filename);
    }

    return this.sqliteInstance;
  }
}