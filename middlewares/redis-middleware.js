const redis = require('redis');
const { REDIS_HOST, REDIS_PORT } = require('../config');

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

function redisMiddleware(req, res, next) {
  const key = req.url;

  if (key) {
    client.get(key, (err, reply) => {
      if (err) {
        res.status(500).json({ err: 'Something went wrong' });
      }
      if (reply !== null) {
        res.json(JSON.parse(reply));
      } else {
        next();
      }
    });
  } else {
    next();
  }
}

module.exports = redisMiddleware;
