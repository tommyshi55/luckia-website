const router = require('express').Router();
const dotenv = require('dotenv');
const request = require('request');
dotenv.config();

module.exports = (function() {
    router.post('/', (req, res) => {
        var firstName = req.body.fName;
        var lastName = req.body.lName;
        var email = req.body.email;
        var phoneNumber = req.body.phone;

        var data = {
            members: [
                {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName,
                        PHONE: phoneNumber
                    }
                }
            ]
        };

        var jsonData = JSON.stringify(data);

        var options = {
            url: "https://us4.api.mailchimp.com/3.0/lists/" + process.env.MAILCHIMP_MEMBERS_ID,
            method: "POST",
            headers: {
                "Authorization": "luckia1 " + process.env.MAILCHIMP_API_KEY
            },
            body: jsonData
        };

        request(options, (error, response, body) => {
            if (error) {
                return res.status(500).json({ success: false, error: error });
            } else {
                if (response.statusCode == 200) {
                    return res.json({ success: true });
                } else {
                    return res.status(500).json({ success: false, error: error });
                }
            }
        });
    });

    return router;
}());