const express = require('express');
const videoRoutes = require('./routes/videoRoute');
const authRoutes = require('./routes/authRoute');
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(express.json());

app.use("/api/videos",videoRoutes);
app.use("/api/auth",authRoutes);




module.exports = app;