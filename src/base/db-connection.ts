import { DBProvider } from "./db-connection-factory-method";

export class DBConnectionFacade<QueryType extends string = string> {
  private readonly dbProvider: DBProvider;

  constructor(db: DBProvider) {
    this.dbProvider = db;
  }

  public open(): void {
    this.dbProvider.openDatabase();
  }

  public async exec(query: QueryType): Promise<unknown> {
    return this.dbProvider.execQuery(query);
  }

  public close(): void {
    this.dbProvider.closeConnection();
  }
}
