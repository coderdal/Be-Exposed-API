const express = require("express");

const server = express();

const cors = require("cors");

const data = require("./data.js");

server.use(
  cors({
    origin: "https://be-exposed.netlify.app",
  })
);

/* EndPoints */

server.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>This api created for <a href='https://be-exposed.netlify.app'>https://be-exposed.netlify.app</a></h1>"
    );
});

server.get("/video", (req, res) => {
  res.status(200).json(data[Math.floor(Math.random() * data.length)]);
});

server.listen(process.env.PORT || 3001, () => {
  console.log("Server is running");
});
