const express = require('express')
const sequelize = require('./database/db');
const routes = require('./routes');
const dotenv = require('dotenv');

const app = express();


dotenv.config();
app.use(routes);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  sequelize.authenticate().then(() =>{
    console.log('connection to database');
  }).catch(error =>{
    console.log(error)
  })
});