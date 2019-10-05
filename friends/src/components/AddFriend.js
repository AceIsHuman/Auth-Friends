import React, { useState } from "react";
import { Modal, Form, Button, Icon } from "semantic-ui-react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = ({ setFriends }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });
  const [toggleModal, setToggleModal] = useState(false);

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("friends", newFriend)
      .then(res => {
        setFriends(res.data);
      });
    closeModal();
  };

  const closeModal = () => setToggleModal(false);

  return (
    <Modal open={toggleModal} onClose={closeModal} trigger={<Button color="facebook" onClick={() => setToggleModal(true)}>Add Friend</Button>} centered>
      <Modal.Header>
        <Icon name="user" />
        Add a Friend
      </Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
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
