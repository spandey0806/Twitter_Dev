// const express = require ('express');
// const connect = require('./config/database');
import express from 'express';
import {connect} from './config/database.js';
import service from './services/tweet-service.js'
 
const app = express();
app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    let ser = new service();
    await ser.create({content: 'Done with #refactor ?'})
});