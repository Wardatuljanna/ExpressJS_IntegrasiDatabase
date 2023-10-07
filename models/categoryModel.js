const pool = require('../config/dbConfig');

// Model untuk berintraksi dengan data category
const getAllCategories = async () => {
  try {
    const result = await pool.query('SELECT * FROM category');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getFilmsByCategory = async (categoryId) => {
  try {
    const result = await pool.query(
      'SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1',
      [categoryId]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  getFilmsByCategory,
};
