export interface DBProvider<QueryType = string, QueryReturnType = unknown> {
  execQuery(query: QueryType): Promise<QueryReturnType>;
}