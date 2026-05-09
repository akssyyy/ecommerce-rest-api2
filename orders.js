/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders management API
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               product:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Order created successfully
 */

const express = require("express");

const router = express.Router();

let orders = [];

router.get("/", (req, res) => {
  res.json(orders);
});

router.post("/", (req, res) => {
  const order = req.body;

  orders.push(order);

  res.json({
    message: "Order created",
    order,
  });
});

module.exports = router;
