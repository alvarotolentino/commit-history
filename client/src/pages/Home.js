import React, { Component } from 'react';
import ListCommits from '../components/ListCommits';
import { Icon } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <>
        {this.state.commits.length > 0 ? (
          <ListCommits commits={this.state.commits}></ListCommits>
        ) : 
        this.state.error ?
        (<h1><Icon name='warning'></Icon>{this.state.error}, please try again later.</h1>):

        (
          <h1>Loading commits..</h1>
        )}
      </>
    );
  }

  state = { commits: [], error: null };

  componentDidMount() {
    fetch(
      `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/commits`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.err) {
          this.setState({ error: data.err });
        } else {
          this.setState({ commits: data });
        }
      });
  }
}

export default Home;
