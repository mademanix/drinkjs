import {Database, RunResult} from 'sqlite3';
import {DBProvider} from "../../base/db-provider";
import {ConsoleLogLogger} from "../../logger/console-log-logger";

export class SQLiteDbProvider implements DBProvider<string, RunResult> {
  private db: Database;
  private logger: ConsoleLogLogger = new ConsoleLogLogger();

  constructor(dbFilePath: string) {
    this.db = new Database(dbFilePath, (err) => {
      if (err) {
        this.logger.error('[SQLite] Error opening SQLite database: ' + err);
      } else {
        this.logger.log('[SQLite] Connected to SQLite database');
      }
    });
  }

  public async execQuery(query: string): Promise<RunResult> {
    const self = this;

    return new Promise((resolve, reject) => {
      self.db.run(query, function (err) {
        if (err) {
          self.logger.error('Error executing SQLite query: ' + err.message);
          reject(err);
        } else {
          self.logger.log('SQLite query executed successfully');
          resolve(this);
        }
      });
    });
  }
}