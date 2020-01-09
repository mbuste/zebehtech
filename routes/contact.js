var express = require('express');
var router = express.Router();
var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer= require('nodemailer')

router.post('/', function (req, res, next) {
    var { name, email, subject, message } = req.body;
    let transporter = nodemailer.createTransport(smtpTransport({
        serice:'gmail',
        host: 'smtp.gmail.com',
        auth:{
            user: process.env.EML,
            pass: process.env.PST
        }
        }))   
    
    let mailOptions={
        from:process.env.EML,
        to: 'zebehtech@gmail.com',
        subject: subject,
        text: "message from "+name+" "+email+" "+message
    }
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            console.log(err);
        } else{
            res.send({"message":"I have recieved your message "+name+" I'll get back to you shortly."});
        }
    })
  });
  
module.exports = router;
  