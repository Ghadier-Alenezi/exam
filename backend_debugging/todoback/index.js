const express = require("express");
// const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan")
require("./db");
require("dotenv").config();

const app = express();

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
