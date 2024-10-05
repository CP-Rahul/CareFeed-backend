const express = require('express');
const mongoose = require('mongoose');

const { ServerConfig } = require('./config');

const app = express();

app.listen(ServerConfig.PORT, async() => {
    try {
        await mongoose.connect(ServerConfig.MONGODBURL);
        console.log('Database connected successfully');
        console.log('Server is up and running on port', ServerConfig.PORT);
    } catch (error) {
        console.log('Something went wrong while connecting to the db');
    }
});