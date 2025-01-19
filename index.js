

//import bodyParser from 'body-parser';

import express from 'express';
import bodyParser from 'body-parser';  // allows any post request ody details
import amazonscrappersRouters from './routes/amazonscrappers.js';
import request from 'request-promise';

//const express = require('express');


//import express from 'express';
//import bodyParser from 'body-parser';
//import request from 'request-promise';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json()); // will be using the jason objects req /response
app.use(express.json());
///app.use(bodyParser.json()); // will be using the jason objects req /response


app.use('/amazonscrappers',amazonscrappersRouters);

app.get('/',(req,res) => {

    res.send('Welcome to Amazon Scapper API');

});



app.listen(PORT,() => console.log(`Server runningon the PORT : ${PORT}`));
