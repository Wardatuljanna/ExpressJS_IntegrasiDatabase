const pool = require('../config/dbConfig');

// Model untuk berintraksi dengan data film
const getAllFilms = async () => {
  try {
    const result = await pool.query('SELECT * FROM film');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getFilmById = async (filmId) => {
  try {
    const result = await pool.query('SELECT * FROM film WHERE film_id = $1', [filmId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllFilms,
  getFilmById,
};
