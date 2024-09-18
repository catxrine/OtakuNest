const authRoutes = require("./routes/auth");

module.exports = function (app) {
  app.use("/auth", authRoutes);
};
