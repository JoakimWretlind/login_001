const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { PORT, CLIENT_URL } = require("./constants");
const passport = require("passport");
const cors = require("cors");

// import pasport midleware
require("./middlewares/passport-middleware");

// initialize middlewares
app.use(express.json());
app.use(cookieParser());
// need to specify some options since we're working with cookies
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

// import routes
const authRoutes = require("./routes/auth");

// initialize routes
app.use("/api", authRoutes);

// app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
