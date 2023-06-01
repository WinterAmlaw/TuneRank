require("dotenv").config();
const db = require("./db");
const express = require('express');
const cors = require('cors');
const app = express();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);

app.use(cors());
app.use(express.json());


// Middleware function to check if the user is authenticated
function authenticateUser(req, res, next) {
  // Get the JWT token from the request headers
  const token = req.headers.authorization?.split(' ')[1]; // Check for null or undefined and split the string to remove 'Bearer'

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Authentication failed"
    });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the user ID to the request object for further processing
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "error",
      message: "Authentication failed"
    });
  }
}

// Middleware function to check if the user is authorized to access a resource
function authorizeUser(req, res, next) {
  // Get the user ID from the request object
  const userId = req.userId;

  // Check if the user has permission to access the resource
  // For example, you can restrict access based on user roles or permissions stored in the database
  if (userId !== req.params.id) {
    return res.status(403).json({
      status: "error",
      message: "Unauthorized"
    });
  }

  next();
}

// User Login
app.post('/api/v1/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get the user with the matching email from the database
    const results = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    if (results.rows.length === 0) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password"
      });
    }

    const user = results.rows[0];

    // Check if the password matches the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordMatch) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password"
      });
    }

    // Generate JWT token with the user ID
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

    // Return success message with the token
    res.status(200).json({
      status: "success",
      data: {
        token
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to login"
    });
  }
});

// User Signup
app.post('/api/v1/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash and salt the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database with the hashed password
    const results = await db.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    // Return the newly created user information with a success message
    res.status(201).json({
      status: "success",
      data: {
        user: results.rows[0]
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create user"
    });
  }
});

app.use(authenticateUser);

//Get all Users
app.get('/api/v1/users', async (req, res) => {
  try {
    const results = await db.query("select * from users");

    // console.log(results)
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        users: results['rows']
      },
    })  
  } catch (error) {
    console.log(error);
  }
});

// Get individual User
app.get('/api/v1/users/:id', authorizeUser, async (req, res) => {
  try {
    const results = await db.query("select * from users where id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        user: results.rows[0]
      },
    })
  } catch (error) {
    console.log(error);
  }
});



const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});