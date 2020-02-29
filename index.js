require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./frontend/build/'));

app.use('/api/signup', require('./backend/routes/signup'));
app.use('/api/contact', require('./backend/routes/contact'));
app.use('/api/work', require('./backend/routes/work'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/frontend/build/' });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})