const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Azure DevOps Web App!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
