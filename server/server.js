const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Flow Test
app.use((req, res, next) => {
  console.log(`
  ********* FLOW TEST **********
  MEDTHOD: ${req.method}
  URL: ${req.url}
  BODY: ${JSON.stringify(req.body)}
  `);
  return next();
});

// render index.html on initial load
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})