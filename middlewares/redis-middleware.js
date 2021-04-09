const redis = require('redis');
const { REDIS_HOST, REDIS_PORT } = require('../config');

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

function redisMiddleware(req, res, next) {
  
}