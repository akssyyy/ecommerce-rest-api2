/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product added successfully
 */

const express = require("express");

const router = express.Router();

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const product = req.body;

  products.push(product);

  res.json({
    message: "Product added",
    product,
  });
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product updated successfully
 */

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.map((product) =>
    product.id === id ? req.body : product
  );

  res.json({
    message: "Product updated",
  });
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter((product) => product.id !== id);

  res.json({
    message: "Product deleted",
  });
});

module.exports = router;
