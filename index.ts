import { DatabaseSQLiteSingleton}  from "./src/app/database-sqlite-singleton";
import { DBConnectionFacade } from "./src/base/db-connection";

const db: DBConnectionFacade = new DBConnectionFacade(DatabaseSQLiteSingleton.getInstance('./drinkjs.db').sqliteConnection);

db.open();
db.exec(`
  CREATE TABLE IF NOT EXISTS ingredient (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    createdAt TEXT,
    alcohol BOOLEAN NOT NULL
  );
`).then(() => {
  db.exec(`
  INSERT INTO ingredient (id, name, createdAt, alcohol) VALUES (1, 'Gin', null, true), (2, 'Tea', null, false);
`).then((res) => console.log(res));
}).then(() => {
  db.close();
})



