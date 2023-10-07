const express = require('express');
const app = express();

// Gunakan JSON body parser
app.use(express.json());

// Import dan gunakan rute filmRoutes dan categoryRoutes
const filmRoutes = require('./routes/filmRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Mengatur rute utama ("/") untuk mengarahkan pengguna ke rute ("/api")
app.get('/', (req, res) => {
  res.redirect('/api');
});

// Menghubungkan rute filmRoutes dan categoryRoutes ke endpoint yang sesuai
app.use('/api', filmRoutes);
app.use('/api', categoryRoutes);

// Port untuk server Express
const port = process.env.PORT || 3300;

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
