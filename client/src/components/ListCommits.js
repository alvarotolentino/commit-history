import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { List, Image, Label, Icon } from 'semantic-ui-react';

function ListCommits(props) {
  return (
    <>
      {props.commits.length > 0 ? (
        <List relaxed='very' animated verticalAlign='middle'>
          {props.commits.map((commit) => (
            <List.Item key={commit.sha}>
              <List.Content
                floated='right'
                as={Link}
                to={`/commit/${commit.sha}`}
              >
                <Label basic color='teal'>
                  <Icon name='code'></Icon>
                  {commit.sha.slice(0, 7)}
                </Label>
              </List.Content>
              <Image avatar src={commit.author.avatar_url} />
              <List.Content>
                <List.Header color='teal'>
                  {commit.author.name} - {commit.author.email}
                </List.Header>
                <List.Description>
                  {commit.message.length > 50
                    ? commit.message.slice(0, 50).concat('...')
                    : commit.message}{' '}
                  <br /> {moment(commit.author.date).fromNow()}.
                </List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      ) : (
        <h1>There are not commits</h1>
      )}
    </>
  );
}

export default ListCommits;
