import React, { useState } from "react";
import { Grid, Button, Form, Header } from "semantic-ui-react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2">Please Login</Header>
        <Form size="large">
          <Form.Input icon="user" placeholder="Username" fluid name='username' value={credentials.username} onChange={handleChange} />
          <Form.Input icon="lock" placeholder="Password" fluid name='password' value={credentials.password} onChange={handleChange} />
          <Button color="facebook" fluid>
            Submit
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
