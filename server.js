const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "static")));

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});