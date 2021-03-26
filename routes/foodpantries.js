const express = require('express');
const { 
    getFoodpantries, 
    getFoodpantry, 
    createFoodpantry,
    updateFoodpantry,
    deleteFoodpantry
} = require('../controllers/foodpantries')

const router = express.Router();

router
    .route('/')
    .get(getFoodpantries)
    .post(createFoodpantry);

router
    .route('/:id')
    .get(getFoodpantry)
    .put(updateFoodpantry)
    .delete(deleteFoodpantry);

module.exports = router;