const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

// Handler untuk mendapatkan semua data pada table film
router.get('/films', filmController.getAllFilms);

// Handler untuk mendapatkan semua data pada table film berdasarkan id
router.get('/films/:id', filmController.getFilmById);

module.exports = router;
