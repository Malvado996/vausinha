const Foodpantry = require(`../models/Foodpantry`)

// @desc    Get all Foodpantries
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getFoodpantries = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all pantries' })
}

// @desc    Get single Foodpantry
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getFoodpantry = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show pantry ${req.params.id}` })
}

// @desc    Create Foodpantry
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createFoodpantry = async (req, res, next) => {
   const foodpantry = await Foodpantry.create(req.body);

   res.status(201).json({
       success: true,
       data: foodpantry
   });
}

// @desc    Update Foodpantry
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateFoodpantry = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update pantry ${req.params.id}` })
}

// @desc    Delete Foodpantry
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteFoodpantry = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete pantry ${req.params.id}` })
}