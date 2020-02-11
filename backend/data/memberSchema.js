const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MemberSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    }
});

module.exports = mongoose.model('Member', MemberSchema);