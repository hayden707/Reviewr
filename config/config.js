require('dotenv').config()
module.exports = {
  development: {
    database: 'reviewr_development',
    dialect: 'postgres'
  },
  test: {
    dialect: 'postgres',
    database: 'reviewr_test'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    database: 'reviewr_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
