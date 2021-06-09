const express = require('express')
const app = express();
require('dotenv').config()
const sequelize = require('./database/db');

app.get('/', (req, res) => {
  res.send('Hello World!')
});


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  sequelize.authenticate().then(() =>{
    console.log('connection to database');
  }).catch(error =>{
    console.log(error)
  })
});