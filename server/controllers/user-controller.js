const User = require('../database/models/User')
const bcrypt = require('bcryptjs');
const tokenService = require('./tokenService');


const login = async(req, res) => {

     const {userId, password} = req.body;
     const user = await User.findByPk(userId);
     if (user){
          const isOk = await bcrypt.compare(password, user.password);
          if(isOk){
               const token = tokenService.createToken(user.userId, user.role);
               res.status(200).send({status:'ok',message: 'logueado correctamente', token, role: user.role })
          }else{
               res.status(403).send({status:'INVALID_PASSWORD', message: 'Contraseña incorrecta'});
          }
     }else{
          res.status(401).send({status:'USER_NOT_FOUND', message: 'usuario no encontrado'});
     }
     res.json(user);
}



module.exports = {login}