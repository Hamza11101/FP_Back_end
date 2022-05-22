require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const morgan = require('morgan');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
require("./src/db/Connect");
require('./src/PassPort/bearerStrategy');
app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message})
});

app.use('/api',require('./src/routes/Register.Route'));
app.use('/api',require('./src/routes/LogIn.Route'));



const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));