const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('session');
const passport = require('passport');

const { useDb } = require('./useDb');

function midWare(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(useDb());
    

}

module.exports = {
    midWare,
}