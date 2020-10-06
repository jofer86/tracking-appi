const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    food: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    food_type: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: [
            'fruit', 'vegetable', 'meat', 'grain', 'dairy', 'bread'
        ]
    },
    portion: {
        type: Number,
        required: true
    },
    portion_unit: {
        type: String,
        required: true,
        enum: ['gr', 'oz']
    },
    carbs: {
        type: Number,
        required: true
    },
    proteins: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Food', FoodSchema)