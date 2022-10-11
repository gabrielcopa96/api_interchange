const express = require('express');

const morgan = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


require('./app/database/connection');

const app = express();

app.use(morgan('dev'))
app.use(cors())

app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})