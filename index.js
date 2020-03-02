require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.use('/api/signup', require('./backend/routes/signup'));
app.use('/api/contact', require('./backend/routes/contact'));
app.use('/api/work', require('./backend/routes/work'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})