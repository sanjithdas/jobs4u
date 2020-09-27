/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-19 13:54:10
 * @modify date 2020-09-19 13:58:37
 * @desc [description]
 */
/**
 * Importing the package required
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes')
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config.js');

// using the express method to access the express server.
const app = express();

//Middleware
app.use(bodyParser.json())
app.use(cors())
//Routes
app.use(router)

sequelize.sync().then(()=>{
    app.listen(config.port)
    console.log(`Server is running on port ${process.env.PORT || 8081}`)
})
