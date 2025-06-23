const express = require('express');
const Mercury = require('@postlight/mercury-parser');
const app = express();

app.get('/', (req, res) => {
  res.send('Mercury Parser is running');
});

app.get('/parser', async (req, res) => {
  const url = req.query.url;
  try {
    const result = await Mercury.parse(url, {
      fallback: true,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36'
      }
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(3000, () => {
  console.log('Mercury Parser running on port 3000');
});
