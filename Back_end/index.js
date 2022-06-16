require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

require("./src/db/Connect");
require('./src/PassPort/bearerStrategy');

app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message})
});

app.use('/api/v1',require('./src/routes/auth.Route'));
app.use('/api/v1',require('./src/routes/user.Route'));
app.use('/api/v1',require('./src/routes/tags.Route'));
app.use('/api/v1',require('./src/routes/forgotPassword.api'));
app.use('/api/v1',require('./src/routes/event.route'));
app.use('/api/v1',require('./src/routes/publicEvent.route'));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));