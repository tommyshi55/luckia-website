const router = require('express').Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

module.exports = (function() {
    router.post('/', (req, res) => {
        const emailText = "name: " + req.body.name + "\nemail: " + req.body.email + "\nphone: " + req.body.phone +
            "\nmessage: " + req.body.message;
        var mailOption = {
            to: process.env.GMAIL,
            subject: "New Message from Website",
            text: emailText
        }

        smtpTransport.sendMail(mailOption, (err, res) => {
            if (err) {
                return res.status(500).json({ success: false, error: err });
            } else {
                return res.json({ success: true });
            }
        });
    });

    return router;
}());