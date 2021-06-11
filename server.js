const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/users", require("./routers/api/users"));
app.use("/api/profile", require("./routers/api/profile"));
app.use("/api/auth", require("./routers/api/auth"));
app.use("/api/posts", require("./routers/api/posts"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
