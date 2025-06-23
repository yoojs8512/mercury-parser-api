const express = require('express');
const Mercury = require('@postlight/mercury-parser');
const app = express();

app.get('/parser', async (req, res) => {
  const url = req.query.url;
  try {
    const result = await Mercury.parse(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(3000, () => {
  console.log('Mercury Parser running on port 3000');
});
