const User = require('../database/models/User')
const Client = require('../database/models/Client');
const sequelize = require('../database/db');


const createClient = async(req, res) =>{

    try{

         await sequelize.transaction(async (t) => {
            
            const client = await Client.create({
                clientNumber : 2281244,
                fullname: 'name name',
                address: 'aaaaaa'
            }, {transaction: t});

           const user = await User.create({
               userid: 2281244,
               password: 'xdxdxdxd',
               role: 'client'
           }, {transaction: t})
           
           res.status(400).send({client, user})
        });
    

    }catch(e){
        console.log(e);
    }
};

module.exports = {createClient}