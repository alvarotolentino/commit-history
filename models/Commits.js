const moment = require('moment');

function Commits(data) {
  this.data = data;
}

Commits.prototype.getSummary = function getSummary() {
  return this.data.map((item) => {
    return {
      sha: item.sha,
      author: {
        name: item.commit.author.name,
        email: item.commit.author.email,
        date: moment(item.commit.author.date).fromNow(),
        avatar_url: item.author.avatar_url,
      },
      message: item.commit.message,
    };
  });
};

Commits.prototype.getDetails = function getDetails() {
  return {
    sha: this.data[0].sha,
    author: {
      name: this.data[0].commit.author.name,
      email: this.data[0].commit.author.email,
      date: moment(this.data[0].commit.author.date).fromNow(),
    },
    message: this.data[0].commit.message,
    html_url: this.data[0].html_url
  };
};

module.exports = Commits;
