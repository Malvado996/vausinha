const mongoose = require(`mongoose`);

const Foodpantry = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true, 
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    website: {
        type: String,
        match: [
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
            'Please use a valid URL with HTTP or HTTPS'
        ],
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters']
    },
    email: {
        type: String,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please add a valid email' 
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],
            required: false
          },
          coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
          },
          formattedAddress: String,
          street: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = Foodpantry
