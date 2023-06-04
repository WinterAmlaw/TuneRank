// controllers/userController.js
const db = require("../db");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const secretKey = crypto.randomBytes(32).toString("hex");
console.log(secretKey);

// User Login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Get the user with the matching email from the database
    const results = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    console.log('login triggerd');

    if (results.rows.length === 0) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    const user = results.rows[0];
    console.log(user);

    // Check if the password matches the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    // Generate JWT token with the user ID
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });

    // Return success message with the token
    res.status(200).json({
      status: "success",
      data: {
        token,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to login",
    });
  }
}

// User Signup
async function signup(req, res) {
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
        user: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create user",
    });
  }
}

//Get all Users
async function getAllUsers(req, res) {
  try {
    const results = await db.query("select * from users");

    // console.log(results)
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        users: results["rows"],
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Get individual User
async function getUserById(req, res) {
  try {
    const results = await db.query("select * from users where id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        user: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login,
  signup,
  getAllUsers,
  getUserById,
};