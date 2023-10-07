const filmModel = require('../models/filmModel');

// Menampilkan data seluruh list film
const getAllFilms = async (req, res) => {
  try {
    const films = await filmModel.getAllFilms();
    res.json(films);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
};

// Menampilkan data film tertentu berdasarkan id
const getFilmById = async (req, res) => {
  const filmId = req.params.id;
  try {
    const film = await filmModel.getFilmById(filmId);
    if (!film) {
      res.status(404).json({ error: 'Film tidak ditemukan.' });
    } else {
      res.json(film);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
};

module.exports = {
  getAllFilms,
  getFilmById,
};
