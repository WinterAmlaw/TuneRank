require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');


const routes = require('./routes');

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

// app.use(express.static('../client/public'))
app.use(express.static(path.join(__dirname, '/media/artists')));
// app.use('/media', express.static(path.join(__dirname, 'media')));

app.get('/media/:type/:filename', (req, res) => {
  const type = req.params.type;
  const filename = req.params.filename;
  
  // Assume that all media files are stored under the 'media' folder
  const filePath = `${__dirname}/media/${type}/${filename}`;
  
  console.log(filePath);
  
  res.sendFile(filePath);
});

// app.get('/explore/artists/:filename', )

console.log(path.join(__dirname, '/media/artists'))

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});