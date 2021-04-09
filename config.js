require('dotenv').config();

const { BACKEND_PORT, OWNER, REPO, REDIS_HOST, REDIS_PORT } = process.env;

module.exports = {
  BACKEND_PORT,
  OWNER,
  REPO,
  REDIS_HOST,
  REDIS_PORT,
};
