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
            .then( data => {
                console.log(data)



                return res.status(201).json({ sucess: data});
            })

        
    })


module.exports = LoginRouter;