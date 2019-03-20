const express = require('express');
const morgan = require('morgan');
const config = require('config');
const app = express();
const arduino = require('./routes/arduino');
const users = require('./routes/user');
const auth = require('./routes/auth');
const db = require('./models/index');
const PORT = config.get('PORT') || 3000;

if (!config.get('jwtPrivateKey') || !config.get('PORT') || !config.get('URL'))  {
    console.error('FATAL ERROR: jwtPrivateKey or Port or Url is no defined.');
    process.exit(1);
}

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/arduino', arduino);
app.use('/api/users', users);
app.use('/api/login', auth);

db.dbConnection();
app.listen(PORT, () => {
    console.log(`Starting server at port: ${PORT}`);
})