const express = require('express');
const cors = require('cors');
const githubRoutes = require('./routes/github-routes');
const { BACKEND_PORT } = require('./config');

const app = express();
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
})
app.use('/', githubRoutes);

app.listen(BACKEND_PORT, () => {
  console.log(`Server listen on port ${BACKEND_PORT}`);
});
