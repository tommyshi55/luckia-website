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
        const emailText = "name: " + req.body.name + "\nemail: " + req.body.email +
            "\nmessage/speciality: " + req.body.message;
        var mailOption = {
            from: process.env.GMAIL,
            to: "luckiastudenthelp@gmail.com",
            subject: "New Recruitment Enquiry from Website",
            text: emailText
        }

        smtpTransport.sendMail(mailOption, (err, response) => {
            if (err) {
                return res.status(500).json({ success: false, error: err });
            } else {
                return res.json({ success: true });
            }
        });
    });

    return router;
}());