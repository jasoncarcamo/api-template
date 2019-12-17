const express = require('express');
const LoginRouter = express.Router();
const LoginService = require("./LoginService");

LoginRouter
    .route("/login")
    .all(express.json())
    .post((req, res)=>{
        console.log(req.body)
        const {
            mobile_number,
            password
        } = req.body;

        const loginForm = {
            mobile_number,
            password
        };

        for( const [key, value] of Object.entries(loginForm)){
            if(value === undefined){
                return res.status(400).json({ error: `Missing ${key} in body request`});
            };
        }

        LoginService.findUser( req.app.get("db"), loginForm.mobile_number)
            .then( dbUser => {
                
                if(!dbUser){
                    return res.status(400).json({ error: "No user found"});
                };

                LoginService.comparePassword( loginForm.password, dbUser.password)
                    .then( match => {

                        if(!match){
                            return res.status(400).json({ error: "Wrong"});
                        };

                        return res.status(200).json({ sucess: data});
                    })

            })

        
    })


module.exports = LoginRouter;