module.exports = (req, res, next) => {
  const { username, email, password } = req.body;

  if (req.path === "/register") {
    // Check if username, email, and password are provided for registration
    if (!username || !email || !password) {
      return res.status(400).json({
        error: "Missing credentials",
      });
    }
  }

  if (req.path === "/login") {
    // Check if email and password are provided for login
    if (!email || !password) {
      return res.status(400).json({
        error: "Missing credentials",
      });
    }
  }

  next();
};
