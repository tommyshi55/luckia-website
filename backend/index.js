const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/luckia-sh-members', { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log("Connected to the database"));
db.on('error', (err) => console.log("Database connection error " + err)); 

app.use('/api/signup', require('./routes/signup'));

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})