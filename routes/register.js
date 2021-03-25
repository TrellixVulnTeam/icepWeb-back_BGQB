const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//register student 
        router.post('/register', function(req, res){ 
            var post = {
                "firstName" : req.body.firstName,
                "lastName" : req.body.lastName,
                "email" : req.body.email,
                "password" : req.body.password
            };
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
            db.query('INSERT INTO applicant SET ?', [post], function(err, results) {
                if(err){
                  throw err
                }else{
                 
                  res.send({data: req.body,msg:"successfully registered"});
                  res.end();  
                };
             
              })
        
            })
module.exports = router;