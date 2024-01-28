import { DBProvider } from "../../base/db-connection-factory-method";
import { Database } from "sqlite";
import * as sqlite3 from "sqlite3";
import {ISqlite} from "sqlite/build/interfaces";


export class DbSqlite implements DBProvider<{ filename: string }> {
  private sqlite: Database;
  constructor(config: {filename: string}) {
    this.createConnection(config);
  }

  public closeConnection(): void {
    if(this.sqlite?.db) {
      this.sqlite.db.close();
    }
  }

  public openDatabase(): void {
    this.sqlite.open();
  }

  public createConnection(config: {filename: string}): void {
    this.sqlite = new Database({
      filename: config.filename,
      driver: sqlite3.Database,
    });
  }

  public execQuery(query: string): Promise<ISqlite.RunResult<sqlite3.Statement>> {
    if(!this.sqlite?.db) {
      throw new Error('[DB SQLite] connection lost!');
    }
    return this.sqlite.run(query);
  }

}