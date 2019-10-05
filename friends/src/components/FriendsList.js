import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, Icon, Header, Container } from "semantic-ui-react";
import AddFriend from "./AddFriend";

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.error(err);
        alert("Unable to get friends list");
      });
  }, []);

  return (
    <Container>
      <Header>Your Friends</Header>
      <AddFriend />
      <Card.Group centered>
        {friends.map(friend => (
          <Card key={friend.id}>
            <Card.Content>
              <Card.Header>
                <Icon name="user" color="blue" />
                {friend.name}
              </Card.Header>
              <Card.Meta>Age: {friend.age}</Card.Meta>
              <Card.Description>
                <Icon name="mail" color="green" />
                {friend.email}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default FriendsList;
