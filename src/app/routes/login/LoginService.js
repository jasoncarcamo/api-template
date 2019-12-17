const bcrypt = require("bcryptjs");


const LoginService = {
    findUser( db, mobile_number){
        return db.select("*").from("users").where({mobile_number});
    },
    comparePassword(password, hash){
        return bcrypt.compare(password, hash);
    }
};

module.exports = LoginService;