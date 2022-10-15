const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const http = require('http');


const dotenv = require('dotenv');
dotenv.config();

require('./app/database/connection');

const app = express();
const server = http.createServer(app)
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.use('/', require('./app/routes'))

app.use(express.static(path.join(__dirname, './static')))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/static/error404.html')
})







server.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})