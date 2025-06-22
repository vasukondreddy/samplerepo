const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET /greet route
app.get('/greet', (req, res) => {
  res.send('Hello, Affordmed!');
});

// POST /sum route
app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
