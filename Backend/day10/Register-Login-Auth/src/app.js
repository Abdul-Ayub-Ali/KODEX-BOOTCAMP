const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routers/user.routes");
const profileRoutes = require("./routers/profile.routes");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

module.exports = app;
