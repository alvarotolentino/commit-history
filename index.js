const express = require('express');
const githubRoutes = require('./routes/github-routes');
const { BACKEND_PORT } = require('./config');

const app = express();

app.use('/', githubRoutes);

app.listen(BACKEND_PORT, () => {
  console.log(`Server listen on port ${BACKEND_PORT}`);
});
