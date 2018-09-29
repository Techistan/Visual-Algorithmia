const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const key = require('./key');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/',routes);


app.listen(key.port,(err) =>
{
    if(err) console.log('Error');
    else console.log('Server is running on port '+key.port);
})