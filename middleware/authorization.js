const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    // Get token from the header
    const token = req.header("token");

    if (!token) {
      return res.status(403).json({ error: "Unauthorized" }); // Return to stop further execution
    }

    // Verify the token if it exists and assign the user to a variable
    const payload = jwt.verify(token, process.env.secret);

    if (payload) {
      // Set the req.user to have the value of the payload.user (e.g., user_id)
      req.user = payload.user;
      return next(); // Only proceed if the payload is valid
    } else {
      return res.status(403).json({ error: "Unauthorized" }); // Return here if the payload is invalid
    }
  } catch (err) {
    // Catch any errors (e.g., invalid signature) and return an Unauthorized response
    return res.status(403).json({ error: "Unauthorized" });
  }
};
