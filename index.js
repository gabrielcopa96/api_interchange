const express = require('express');

const morgan = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

require('./app/database/connection');

const app = express();
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.use('/', require('./app/routes'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/static/404.html')
})




app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})