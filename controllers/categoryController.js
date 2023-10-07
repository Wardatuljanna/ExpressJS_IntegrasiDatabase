const categoryModel = require('../models/categoryModel');

// Menampilkan data list category
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
};

// Menampilkan data list film berdasarkan category id
const getFilmsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const films = await categoryModel.getFilmsByCategory(categoryId);
    res.json(films);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
};

module.exports = {
  getAllCategories,
  getFilmsByCategory,
};
