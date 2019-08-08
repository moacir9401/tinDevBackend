const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const server = express();

mongoose.connect(
  "mongodb+srv://tinderdevs:419207@cluster0-zh5nj.mongodb.net/oministack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3000);
