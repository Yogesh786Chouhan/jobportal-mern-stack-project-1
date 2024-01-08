//command line
// npm i ejs --save
//npm i body-parser --save
//npm i mongoose -save
//npm i express --save
//npm i bcrypt (Password)
//npm i dotenv (Port)
//npm i jsonwebtoken(Port)
// npm install cors (CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.)
//npm i multer (file uploading)
// Username : - yogeshchouhan074358
// password : - FDIUY7HMqfQrlGp9
// ------------------------------------


// const express = require('express');
//const dotenv = require('dotenv');
import express from 'express';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routers/routes.js';


import path from 'path';

const app = express();





import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// static file for render.com
// app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
// });





dotenv.config();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors());
app.use('/public', express.static('public'))
app.use(router);



app.get("/", (req, res) => {
    res.send("Node Js Application");
});


app.listen(process.env.PORT, () => {
    console.log(`Start ${process.env.APPLICATION_MODE} in Port : ${process.env.PORT} `);
});

