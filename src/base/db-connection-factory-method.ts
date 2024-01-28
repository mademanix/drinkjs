export abstract class DBConnectionFactory {
  public abstract createInstance(config: unknown): DBProvider;
}

export interface DBProvider<ConfigType extends {} = unknown, QueryType = string>  {
  createConnection(config: ConfigType): unknown;
  openDatabase(): unknown;
  execQuery(query: QueryType): unknown;
  closeConnection(): unknown;
}