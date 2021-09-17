const express = require('express');
const router = express.Router();
require('dotenv').config();
const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendMail = async (body)=>{
    try{
        await transporter.sendMail(body);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const mailToClient=(email,message)=>{
    let body = {
        from: '"DownTape" downtape1@gmail.com',
        to: email,
        subject: 'Thank you for contanting us - DownTape',
        html: `<h3>We received your Message / Feedback / Complaint</h3> <h4>We will look forward in it.</h4> <p>Your message is: ${message}</p><br/>`,
    };
    sendMail(body);
};
const mailToDowntape=(name,clientEmail,message)=>{
    let body = {
        from: '"DownTape" downtape1@gmail.com',
        to: 'downtape1@gmail.com',
        subject: `Message received from ${name}`,
        html: `<h3>Client Email: ${clientEmail}</h3> <h4>Client Message: ${message}</h4><br/>`,
    };
    sendMail(body);
};

router.get('/sendmail', async (req, res)=>{
    try{
        const { name, email, message } = req.query;
        await transporter.verify();
        mailToClient(email, message);
        mailToDowntape(name, email, message);
        res.status(200).json('Message Sent');
    } catch (err) {
        console.log(err);
        res.status(404).json(err.message);
    }
});

module.exports = router;
