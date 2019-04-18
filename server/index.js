require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');

const { midWare } = require('./middleWare');

const app = express();

midWare(app);

app.listen(4000, () => {
    console.log('The backend is up and running on port 4000.')
})
