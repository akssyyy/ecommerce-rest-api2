const express = require("express");
const cors = require("cors");
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
