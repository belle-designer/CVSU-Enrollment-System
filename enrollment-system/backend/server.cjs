const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-user',
  password: 'your-mysql-password',
  database: 'your-mysql-database',
});

// Test the MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err.stack);
    return;
  }
  console.log('Connected to MySQL.');
});

// Registration API
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (result.length > 0) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
      [email, hashedPassword, 'Student'],
      (err, result) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Database error' });
        }
        res.status(201).json({ success: true, message: 'Registration successful' });
      }
    );
  });
});

// Login API
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (result.length === 0) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    res.status(200).json({ success: true, user: { email: user.email, role: user.role } });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
