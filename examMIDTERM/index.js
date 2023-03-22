const express = require('express');
const app = express();

const dishes = [
  { type: 'sisig', province: 'pampanga', price: 220 },
  { type: 'salpicao', province: 'quezon', price: 180 },
  { type: 'bagnet', province: 'ilocos', price: 370 },
];

app.get('/dishes', (req, res) => {
  res.json(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const dish = dishes.find((d) => d.type === req.params.type);
  if (!dish) {
    res.status(404).json({ error: 'Record not found' });
  } else {
    res.json(dish);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Record not found' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
