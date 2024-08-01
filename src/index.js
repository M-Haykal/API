const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome in my api");
});

const productController = require("./product/product_controller");

app.use('/products', productController);

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
