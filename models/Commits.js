function Commits(data) {
  this.data = data;
  this.getSummary = () => {
    return this.data.map((item) => {
      return {
        sha: item.sha,
        author: {
          name: item.commit.author.name,
          email: item.commit.author.email,
          date: item.commit.author.date,
          avatar_url: item.author.avatar_url,
        },
        message: item.commit.message,
      };
    });
  };

  this.getDetails = () => {
    return {
      sha: this.data.sha,
      author: {
        name: this.data.commit.author.name,
        email: this.data.commit.author.email,
        date: this.data.commit.author.date,
        avatar_url: this.data.author.avatar_url,

      },
      message: this.data.commit.message,
      html_url: this.data.html_url,
    };
  };
}

module.exports = Commits;
