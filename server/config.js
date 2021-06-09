require('dotenv').config();


module.exports = {

    
    database: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "bank",
        host: process.env.DB_HOST
    }
}