const express = require('express');
const LoginRouter = express.Router();

LoginRouter
    .route("/login")
    .all(express.json())
    .post((req, res)=>{
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

        return res.status(201).json({ sucess: "Your tokem here"});
    })


module.exports = LoginRouter;