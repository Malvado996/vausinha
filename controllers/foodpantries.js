const Foodpantry = require(`../models/Foodpantry`)

// @desc    Get all Foodpantries
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getFoodpantries = async (req, res, next) => {
    try {
        const foodpantries = await Foodpantry.find();

        res.status(200).json({ success: true, data: foodpantries });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Get single Foodpantry
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getFoodpantry = async (req, res, next) => {
    try {
        const foodpantry = await Foodpantry.findById(req.params.id);

        if(!foodpantry) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: foodpantry })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

// @desc    Create Foodpantry
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createFoodpantry = async (req, res, next) => {
   
   try {
        const foodpantry = await Foodpantry.create(req.body);

        res.status(201).json({ success: true, data: foodpantry });
   } catch (err) {
        res.status(400).json({ success: false });
   }
   
}

// @desc    Update Foodpantry
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateFoodpantry = async (req, res, next) => {
    try {
        const foodpantry = await Foodpantry.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!foodpantry) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: foodpantry })
    } catch (error) {
        res.status(400).json({ success: false, error: error })
    }
}

// @desc    Delete Foodpantry
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteFoodpantry = async (req, res, next) => {
    try {
        const foodpantry = await Foodpantry.findByIdAndDelete(req.params.id)

        if(!foodpantry) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })
    } catch (error) {
        res.status(400).json({ success: false, error: error })
    }
}