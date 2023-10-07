const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Handler untuk mendapatkan semua data category
router.get('/categories', categoryController.getAllCategories);

// Handler untuk mendapatkan data film berdasarkan category
router.get('/films/category/:categoryId', categoryController.getFilmsByCategory);

module.exports = router;
