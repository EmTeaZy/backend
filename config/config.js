require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    host: 'ec2-107-21-67-46.compute-1.amazonaws.com',
    database: 'df6mttapos0aml',
    username: 'aytubncgvakpug',
    password:
      'a2ad2ad7cc2c0987fd91ea6425df212f5517302d2cac229411897c02bcf5efc0',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
