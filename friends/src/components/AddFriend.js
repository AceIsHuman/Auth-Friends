import React, { useState } from "react";
import { Modal, Form, Button, Icon } from "semantic-ui-react";

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });
  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  return (
    <Modal trigger={<Button color="facebook">Add Friend</Button>} centered>
      <Modal.Header>
        <Icon name="user" />
        Add a Friend
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            name="name"
            placeholder="Name"
            value={newFriend.name}
            onChange={handleChange}
          />
          <Form.Input
            name="age"
            placeholder="Age"
            value={newFriend.age}
            onChange={handleChange}
          />
          <Form.Input
            name="email"
            placeholder="Email"
            value={newFriend.email}
            onChange={handleChange}
          />
          <Button color="facebook">Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddFriend;
