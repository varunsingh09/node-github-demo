// importing node framework
const express = require("express");

const app = express();
const PORT = '7000' || process.env.PORT
// Respond with "Hello World via Github Actions" for requests that hit our root "/"
app.get("/", function (req, res) {
  return res.send("Hello World via Github Actions");
});

// listen to port 7000 by default
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

module.exports = app;
