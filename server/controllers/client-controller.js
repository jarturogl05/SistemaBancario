const sequelize = require('../database/db');
const ID = require("nodejs-unique-numeric-id-generator")
const bcrypt = require('bcryptjs');

const User = require('../database/models/User')
const Client = require('../database/models/Client');


const getClientByNumber = async(req, res) =>{
    clientNumber = req.params.clientNumber;
    const result = await Client.findByPk(clientNumber);
    if(result){
        res.status(200).send({client: result})

    }else{
        res.status(404).send('not found')

    }

}

const createClient = async(req, res) =>{

    const {fullname, address, password} = req.body;
    const clientNumber = await generateClientId();
    const hash = await bcrypt.hash(password, 2);
    

    try{

         await sequelize.transaction(async (t) => {
            
            await Client.create({
                clientNumber,
                fullname,
                address
            }, {transaction: t});

           await User.create({
               userid: clientNumber,
               password: hash,
               role: 'client'
           }, {transaction: t})
           res.status(200).send({clientNumber, fullname })

        });
    

    }catch(e){
        console.log(e);
        res.status(400).send('error')

    }
};





async function generateClientId(){
    id = ID.generate(new Date().toJSON()) 
    const digits = Math.floor(Math.random()*(999-100+1)+100);
    return (id + digits).toString();
}   


module.exports = {createClient, getClientByNumber}