const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ConnectDatabase = require('./config/database');


require('dotenv').config();

//database
ConnectDatabase();


// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));