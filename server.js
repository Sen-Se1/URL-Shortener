const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const path = require('path');

const dbConnection = require("./config/db");

dbConnection();
const PORT = process.env.PORT || 8000;

const app = express();

app.set("view engine", "ejs");
app.use('/css', express.static(path.resolve(__dirname,'assets/css')));
app.use('/js', express.static(path.resolve(__dirname,'assets/js')));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/shortUrl"));


const server = app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
