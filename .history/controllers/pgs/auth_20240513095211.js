const bcrypt = require('bcryptjs/dist/bcrypt');
const authenticateUtil = require('../../utils/authenticate.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.users.findUnique({
            where: {email: email,},
        })
       
        if (user) {
          var passwordIsValid=password==user.password;
          if (passwordIsValid) {
            const accessToken = authenticateUtil.generateAccessToken({ id: user.id, name: user.name, isAdmin : user.isAdmin });
            res.status(200).json({ name: user.name, token: accessToken });
          }else{
                res.status(401).json({ msg: "Password inválida!" });
          }
        }
    } catch (error) {
        res.status(401).json({ msg: error.message })
    }
}
