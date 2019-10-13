import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, Icon, Header, Container, Menu, Button } from "semantic-ui-react";
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
      <Menu pointing secondary>
        <Menu.Item>
          <Header>Your Friends</Header>
        </Menu.Item>
        <Menu.Item position="right">
          <AddFriend setFriends={setFriends} />
        </Menu.Item>
        <Menu.Item>
          <Button color="grey" onClick={() => {
            localStorage.removeItem('token');
            props.history.push("/login");
          }}>
            Log Out
          </Button>
        </Menu.Item>
      </Menu>
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
