const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Connect complete</h1>");
  console.log(`Now is connecting at port ${port}`);
});

app.listen(port);
