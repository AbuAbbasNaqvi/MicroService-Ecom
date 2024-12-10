// product-service/server.js
const express = require('express');
const app = express();
const port = 3001;

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 600 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
