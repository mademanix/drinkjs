import {SequelizeModuleOptions} from "@nestjs/sequelize";

export const dbConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/drinkjs.db',
  autoLoadModels: true,
  synchronize: false,
}