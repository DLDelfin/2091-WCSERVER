const express = require('express');
const app = express();

const dishes = [
  { type: 'Sisig', province: 'Pampanga', price: 220 },
  { type: 'Salpicao', province: 'Quezon', price: 180 },
  { type: 'Bagnet', province: 'Ilocos', price: 370 },
];

app.get('/dishes', (req, res) => {
  res.json(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const dish = dishes.find((d) => d.type === req.params.type);
  if (!dish) {
    res.status(404).json({ error: 'Record Not Found' });
  } else {
    res.json(dish);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Record Not Found' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
