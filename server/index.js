require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const bcrypt = require('bcrypt');
const app = express();

// Middleware
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL Database!');
});

// --- API Routes ---

// Get Vehicles
app.get('/api/vehicles', (req, res) => {
  const sql = "SELECT * FROM vehicles";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, results[0].password);
    if (match) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.get('/api/signup', (req, res) => {
    res.json({ message: "The signup route is working and reachable!" });
});

// Signup
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    
    db.query(sql, [username, hashedPassword], (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ message: "Registration failed." });
      }
      res.json({ message: "Account created successfully!" });
    });
  } catch (error) {
    res.status(500).json({ message: "Error hashing password" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});