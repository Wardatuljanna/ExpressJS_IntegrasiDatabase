const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'admin',
  port: 5432,
});

module.exports = pool;

// Mengecek koneksi ke database
if (require.main === module) {

  pool.connect((err, client, release) => {
    if (err) {
      console.error('Gagal terkoneksi ke database:', err);
    } else {
      console.log('Berhasil terkoneksi ke database');
      release();
    }
  });
}