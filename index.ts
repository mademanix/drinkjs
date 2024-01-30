import {RunResult} from "sqlite3";
import {DBProvider} from "./src/base/db-provider";
import {SQLiteDbProvider} from "./src/db/sqlite/db.sqlite";
import {BaseModelDAO} from "./src/base/base-model-dao";
import {IngredientModel} from "./src/db/ingredient/ingredient-model";
import {IngredientRepository} from "./src/db/ingredient/ingredient-repository";

const dbProvider: DBProvider<string, RunResult> = new SQLiteDbProvider('./drinkjs.db');
const modelDAO: BaseModelDAO<IngredientModel, RunResult> = new BaseModelDAO<IngredientModel, RunResult>(dbProvider, 'ingredient');
const ingredientRepository: IngredientRepository<RunResult> = new IngredientRepository(modelDAO);

const newItem: IngredientModel = {
  name: 'test',
  id: 1,
  alcohol: true,
  createdAt: '2024-01-30',
}

ingredientRepository.createItem(newItem).then(result => {
  console.log('ok: ', result);
}).catch(error => {
  console.error('error: ', error);
});

ingredientRepository.findExactlyOne(1).then(result => {
  console.log('ok: ', result);
}).catch(error => {
  console.error('error: ', error);
});

ingredientRepository.update(1, {...newItem, alcohol: false}).then(result => {
  console.log('ok: ', result);
}).catch(error => {
  console.error('error: ', error);
});

// ingredientRepository.deleteItem(1).then(result => {
//   console.log('ok: ', result);
// }).catch(error => {
//   console.error('error: ', error);
// });

