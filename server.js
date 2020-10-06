const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')

// Load ENV Vars
dotenv.config({ path: './config/config.env' });
// Connection to DB
connectDB();
// Require Routes and declare App
const foods = require('./routes/foods')
const app = express();
// Body Parser
app.use(express.json())
// Router Mounting
app.use('/api/v1/foods', foods);
//error errorHandler
app.use(errorHandler)
// Port and fallback
PORT = process.env.PORT || 8080
// Listen
app.listen(PORT, console.log(`Server up and Running on port: ${PORT}`));

