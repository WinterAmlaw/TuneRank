// middlewares/authMiddleware.js
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const secretKey = crypto.randomBytes(32).toString("hex");
console.log(secretKey);

// Middleware function to check if the user is authenticated
function authenticateUser(req, res, next) {
  // Get the JWT token from the request headers
  const token =
    req.headers.authorization?.split(" ")[1]; // Check for null or undefined and split the string to remove 'Bearer'

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Authentication failed",
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
      message: "Authentication failed",
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
      message: "Unauthorized",
    });
  }

  next();
}

module.exports = {
  authenticateUser,
  authorizeUser,
};