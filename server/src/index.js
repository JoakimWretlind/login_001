const express = require("express");
const app = express();
const { PORT } = require("./constants");

// app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error; ${error.message}`);
  }
};

appStart();
