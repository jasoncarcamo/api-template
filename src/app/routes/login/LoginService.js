const LoginService = {
    findUser( db, mobile_number){
        return db.select("*").from("users").where({mobile_number});
    }
}

module.exports = LoginService;