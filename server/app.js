require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const routes = require('./routes')

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes)

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});