const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const color = require(`colors`);
const errorHandler = require(`./middleware/error`);
const connectDB = require('./config/db');

// Load .env vars
dotenv.config({ path: './config/config.env' }); 

// Connect to MongoDB
connectDB();

// Route files
const foodpantries = require('./routes/foodpantries');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/foodpantries', foodpantries);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightBlue.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`ERROR: ${err.message}`.brightYellow.bold);
    // Close server & exit process
    server.close(() => process.exit(1));
})

// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// const color = require(`colors`);
// const errorHandler = require(`./middleware/error`);
// const connectDB = require('./config/db');

// // Load .env vars
// dotenv.config({ path: './config/config.env' }); 

// // Connect to MongoDB
// connectDB();

// // Route files
// const foodpantries = require('./routes/foodpantries');

// const app = express();

// // Body parser
// app.use(express.json());

// // Dev logging middleware
// if(process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
// }

// // Mount routers
// app.use('/api/v1/foodpantries', foodpantries);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightBlue.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`ERROR: ${err.message}`.brightYellow.bold);
    // Close server & exit process
    server.close(() => process.exit(1));
})