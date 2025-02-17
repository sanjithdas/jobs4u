module.exports = {
  port: process.env.PORT || 8081,
    db: {
    //process.env.DB_NAME is a environmental variable if that is not set then use 'vueproject'
    database: process.env.DB_NAME || 'jobstest',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    options: {
    //dialect - refers to the type of database you are connecting to
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.HOST || 'localhost',
   // storage: './jobs.sqlite',
    }
    },
    authentication: {
    //Application secret for creating a secure web token
    jwtSecret: process.env.JWT_SECRET || 'secret'
    }
  }