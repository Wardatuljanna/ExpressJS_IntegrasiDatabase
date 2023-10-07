const { Pool } = require('pg');
const fs = require('fs');

// Koneksi ke database postgresql
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'admin',
  port: 5432,
});

const seedData = async () => {
  try {
    const sql = fs.readFileSync('./db/seeding.sql', 'utf8');
    await pool.query(sql);
    console.log('Seeding berhasil.');
  } catch (error) {
    console.error('Gagal melakukan seeding:', error);
  } finally {
    pool.end();
  }
};

seedData();

