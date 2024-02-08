module.exports = {
  development: {
    dialect: 'sqlite',
    storage: '../.db/drinkjs.db',
    autoLoadModels: true,
    synchronize: false,
  },
  test: {
    dialect: 'sqlite',
    storage: '../.db/drinkjs.db',
    autoLoadModels: true,
    synchronize: false,
  },
  production: {
    dialect: 'sqlite',
    storage: '../.db/drinkjs.db',
    autoLoadModels: true,
    synchronize: false,
  },
}