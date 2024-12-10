// cart-service/server.js
const express = require('express');
const app = express();
const port = 3002;

let carts = [
  { userId: 1, cart: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }] },
];

app.get('/cart', (req, res) => {
  res.json(carts);
});

app.listen(port, () => {
  console.log(`Cart service listening at http://localhost:${port}`);
});
