const express = require('express')
const sequelize = require('./database/db');
const routes = require('./routes');
const dotenv = require('dotenv');
require('./database/associations');
const app = express();



dotenv.config();
app.use(express.json());

app.use(routes);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  sequelize.sync({force: false}).then(() =>{
    console.log('connection to database');
  }).catch(error =>{
    console.log(error)
  })
});