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

// [
//     {
//         "name": "Hoboken Shelter",
//         "description": "The Hoboken Shelter serves 300 meals per day, and shelters 50 people each night.",
//         "website": "https://cfbnj.org/hoboken-shelter",
//         "phone": "908-355-3663",
//         "email": "email@email.com",
//         "address": "31 Evans Terminal Hillside, NJ 07205",
//         "photo": "photo-data"
//     },
//     {
//         "name": "Hoboken Food Pantry",
//         "description": "The Hoboken Community Center (HCC) is a 501(c)(3) not-for-profit organization located at 1301 Washington Street.",
//         "website": "https://www.hobokencc.org/",
//         "phone": "(201) 963-4100",
//         "email": "email@email.com",
//         "address": "300 Bloomfield St, Hoboken, NJ 07030",
//         "photo": "photo-data"
//     },
//     {
//         "name": "St. Matthew Trinity Lunchtime Ministry",
//         "description": "Located in the heart of Hoboken, Lunchtime Ministry is a soup kitchen/drop-in center providing food and welcome.",
//         "website": "https://lunchtimeministry.webs.com",
//         "phone": "(201) 659-4499",
//         "email": "email@email.com",
//         "address": "57 8th St, Hoboken, NJ 07030",
//         "photo": "photo-data"
//     },
//     {
//         "name": "Our Lady of Grace Roman Catholic Church",
//         "description": "The Church of Our Lady of Grace is a Roman Catholic church built between 1874 and 1876.",
//         "website": "http://olghoboken.com/",
//         "phone": "(201) 659-0369",
//         "email": "email@email.com",
//         "address": "400 Willow Ave, Hoboken, NJ 07030",
//         "photo": "photo-data"
//     },
//     {
//         "name": "Our Lady of Grace Roman Catholic Church",
//         "description": "The Church of Our Lady of Grace is a Roman Catholic church built between 1874 and 1876.",
//         "website": "http://olghoboken.com/",
//         "phone": "(201) 659-0369",
//         "email": "email@email.com",
//         "address": "400 Willow Ave, Hoboken, NJ 07030",
//         "photo": "photo-data"
//     },
//     {
//         "name": "Bubby Shelter",
//         "description": "Feeding Bubbies, but no treats",
//         "website": "http://bubby.com/",
//         "phone": "(555) 555-5555",
//         "email": "email@email.com",
//         "address": "530 Madison Ave, Hoboken, NJ 07030",
//         "photo": "photo-data"
//     }
// ]