const express = require("express");
const colors = require("colors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routed for /api/users
app.use("/api/users", require("./Routes/api/members"));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`.cyan.underline);
});
