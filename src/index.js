const express = require('express');
const mongoose = require('mongoose');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    try {
        await mongoose.connect(ServerConfig.MONGODBURL);
        console.log('Database connected successfully');
        console.log('Server is up and running on port', ServerConfig.PORT);
    } catch (error) {
        console.log('Something went wrong while connecting to the db');
    }
});