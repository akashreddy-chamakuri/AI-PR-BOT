require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();

// ✅ Connect to MongoDB (MongoDB server logic)
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
}

connectDB();

// ✅ Middleware for API Server
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// ✅ Auth Routes for the API
app.use("/auth", authRoutes);

// ✅ Base Route for the API
app.get("/", (req, res) => {
  res.send("🚀 Social Media Bot Running!");
});

// ✅ Start the API Server
const API_PORT = process.env.PORT || 5002;
app.listen(API_PORT, () => {
  console.log(`✅ API Server running on port ${API_PORT}`);
});

// ✅ Second Server (For MongoDB operations or any other purposes, running on a different port)
const mongoAPIApp = express();

mongoAPIApp.get("/", (req, res) => {
  res.send("🚀 MongoDB API Running!");
});

const MONGO_API_PORT = process.env.PORT || 5001;
mongoAPIApp.listen(MONGO_API_PORT, () => {
  console.log(`✅ MongoDB API Server running on port ${MONGO_API_PORT}`);
});
