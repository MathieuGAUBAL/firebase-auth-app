const express = require('express');
require('dotenv').config();
const connection = require('./db_config');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

connection.connect((err) => {
    if(err){
        console.error('not connected to database.' + err.stack);
    }else{
        console.log('connected to the database.');
    }
})

app.listen(PORT, () => {
    console.log(`This server listening on the port ${PORT}`);
})