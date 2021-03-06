const express = require('express');
const { getFood, getFoods, createFood, updateFood, deleteFood } = require('../controllers/foods');
const router = express.Router();

router
    .route('/')
    .get(getFoods)
    .post(createFood);

router
    .route('/:id')
    .get(getFood)
    .put(updateFood)
    .delete(deleteFood);

module.exports = router;
