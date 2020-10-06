const Food = require('../models/Food');
const ErrorResponse = require('../utils/ErrorResponse');

/**
 *
 * @desc      GET Gets all the fooods
 * @route     api/v1/foods
 * @access    public
 */
exports.getFoods = async (req, res, next) => {
    const foods = await Food.find();
    if (foods) {
        res.status(200).json({
            success: true,
            data: foods,
            count: foods.length
        });
    }
};

/**
 *
 * @desc      GET Gets one food
 * @route     api/v1/foods/:id
 * @access    public
 */
exports.getFood = async (req, res, next) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return next(new ErrorResponse(`Food with the id of ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: food
        });
    } catch (error) {
        return next(new ErrorResponse(`Food with the id of ${req.params.id}`, 404));
    }

};

/**
 *
 * @desc      POST Creates a food registry
 * @route     api/v1/foods/:id
 * @access    public
 */
exports.createFood = async (req, res, next) => {
    try {
        const food = await Food.create(req.body);
        res.status(201).json({
            success: true,
            data: food
        });
    } catch (err) {
        return next(new ErrorResponse('Unable to create registry', 404))
    }
};

/**
 *
 * @desc      PUT Creates a food registry
 * @route     api/v1/foods/:id
 * @access    public
 */
exports.updateFood = async (req, res, next) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            data: {
                updated: true,
                food
            }
        });
    } catch (err) {
        return next(new ErrorResponse('Unable to update registry', 404))
    }
};

/**
 *
 * @desc      DELETE Creates a food registry
 * @route     api/v1/foods/:id
 * @access    public
 */
exports.deleteFood = async (req, res, next) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return next(new ErrorResponse('Unable to delete registry', 404))
    }
};
