import React, { useState } from "react";
import { Grid, Button, Form, Header, Dimmer, Loader } from "semantic-ui-react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("login", credentials)
      .then(res => {
        setIsLoading(false);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        alert('Username and Password are incorrect');
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      {isLoading ? (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      ) : null}
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2">Please Login</Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Form.Input
            icon="user"
            placeholder="Username"
            fluid
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <Form.Input
            icon="lock"
            placeholder="Password"
            fluid
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button color="facebook" fluid>
            Submit
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
