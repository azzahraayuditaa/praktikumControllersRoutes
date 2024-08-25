const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//import routes
const praktikum = require(`./routes/praktikumRoute`);

//implementasi
app.use(`/praktikum`, praktikum);

app.get("/test", (req, res) => {
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };

  res.json(response);
});

const balokRoutes = require('./routes/balokRoutes');
const kubusRoutes = require('./routes/kubusRoutes');
const tabungRoutes = require('./routes/tabungRoutes');
const bolaRoutes = require('./routes/bolaRoutes');

app.use(bodyParser.json());

app.use('/balok', balokRoutes);
app.use('/kubus', kubusRoutes);
app.use('/tabung', tabungRoutes);
app.use('/bola', bolaRoutes);

const express = require('express');
const bodyParser = require('body-parser');
const suhuRoutes = require('./routes/suhuRoutes');

app.use(bodyParser.json());

app.use('/suhu', suhuRoutes);

const express = require('express');
const bodyParser = require('body-parser');
const numberRoutes = require('./routes/numberRoutes');


app.use(bodyParser.json());

app.use('/number', numberRoutes);

const express = require('express');
const bodyParser = require('body-parser');
const bmiRoutes = require('./routes/bmiRoutes');

app.use(bodyParser.json());

app.use('/bmi', bmiRoutes);

// menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("Server run on port 8000");
});
