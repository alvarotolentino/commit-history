const express = require('express');
const redis = require('redis');
const { Octokit } = require('@octokit/core');
const redisMiddleware = require('../middlewares/redis-middleware');
const ObjCommit = require('../models/Commits');
const { OWNER, REPO, REDIS_HOST, REDIS_PORT } = require('../config');

const octokit = new Octokit();

const routes = express.Router();
routes.use(redisMiddleware);
let client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

routes.get('/commits', async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;

  octokit
    .request(
      'GET /repos/{owner}/{repo}/commits?per_page={per_page}&page={page}',
      {
        owner: OWNER,
        repo: REPO,
        per_page: limit,
        page: page,
      }
    )
    .then(
      (gitResponse) => {
        if (gitResponse.data.length === 0) {
          res.json({ err: 'There are not commits' });
        } else {
          const commits = new ObjCommit(gitResponse.data);
          res.json(commits.getSummary());
        }
      },
      (err) => {
        res.status(500).json({ err: 'Something went wrong' });
      }
    );
});

routes.get('/commits/:id', (req, res) => {
  const id = encodeURIComponent(req.params.id);
  if (id.length !== 40) res.json({ err: 'Invalid id' });
  else
    octokit
      .request('GET /repos/{owner}/{repo}/commits/{id}', {
        owner: OWNER,
        repo: REPO,
        id,
      })
      .then(
        (gitResponse) => {
          const detail = new ObjCommit(gitResponse.data);
          client.set(req.url, JSON.stringify(detail.getDetails()));
          res.json(detail.getDetails());
        },
        (err) => res.status(500).json({ err: 'Something went wrong' })
      );
});

module.exports = routes;
