module.exports = 

{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "18@Glendale",
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    
  },
  "production": {
    "username": "root",
    "password": "18@Glendale",
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    
  }
}