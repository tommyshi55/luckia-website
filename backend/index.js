const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/signup', require('./routes/signup'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/work', require('./routes/work'));

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})