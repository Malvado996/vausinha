const ErrorResponse = require(`../utils/errorResponse`)
const asyncHandler = require(`../middleware/async`)
const Foodpantry = require(`../models/Foodpantry`)

// @desc    Get all Foodpantries
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getFoodpantries = asyncHandler(async (req, res, next) => {
        const foodpantries = await Foodpantry.find();

        res.status(200).json({ success: true, count: foodpantries.length, data: foodpantries });
});

// @desc    Get single Foodpantry
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getFoodpantry = asyncHandler(async (req, res, next) => {
        const foodpantry = await Foodpantry.findById(req.params.id);

        if(!foodpantry) {
            return next(new ErrorResponse(`Foodpantry not found with ID of ${req.params.id}`, 404))
        }

        res.status(200).json({ success: true, data: foodpantry })
})

// @desc    Create Foodpantry
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createFoodpantry = asyncHandler(async (req, res, next) => {
        const foodpantry = await Foodpantry.create(req.body);

        res.status(201).json({ success: true, data: foodpantry }); 
})

// @desc    Update Foodpantry
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateFoodpantry = asyncHandler(async (req, res, next) => {
        const foodpantry = await Foodpantry.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!foodpantry) {
            return next(new ErrorResponse(`Foodpantry not found with ID of ${req.params.id}`, 404))
        }

        res.status(200).json({ success: true, data: foodpantry })
})

// @desc    Delete Foodpantry
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteFoodpantry = asyncHandler(async (req, res, next) => {
        const foodpantry = await Foodpantry.findByIdAndDelete(req.params.id)

        if(!foodpantry) {
            return next(new ErrorResponse(`Foodpantry not found with ID of ${req.params.id}`, 404))
        }

        res.status(200).json({ success: true, data: {} })
})