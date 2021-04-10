import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Image, Icon } from 'semantic-ui-react';
import moment from 'moment';


const fetchData = async (id) => {
  const res = await fetch(
    `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/commits/${id}`
  );
  const json = await res.json();
  return [json];
};

function Commit() {
  let { id } = useParams();
  const [commitDetail, setCommitDetail] = useState(null);
  
  useEffect(() => {
    fetchData(id).then((commit) => {
      setCommitDetail(commit[0]);
    });
  },[id]);
  
  return (
    <>
      {commitDetail && commitDetail.sha ? (
        <Card fluid>
          <Card.Content>
            <Card.Header>{commitDetail.message}</Card.Header>
            <Card.Meta>
              <span><Icon name='git'></Icon> {commitDetail.sha}</span>
            </Card.Meta>
            <Card.Description>

            </Card.Description>
            <Card.Content extra>
              
              <Image avatar src={commitDetail.author.avatar_url} /> {commitDetail.author.name} committed {moment(commitDetail.author.date).fromNow()}
              
            </Card.Content>
          </Card.Content>
        </Card>
      ) : (
        <h1>Loading..</h1>
      )}
    </>
  );
}

export default Commit;
