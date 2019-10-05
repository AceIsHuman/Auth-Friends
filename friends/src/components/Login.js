import React from "react";
import { Grid, Button, Form, Header } from "semantic-ui-react";

const Login = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2">Please Login</Header>
        <Form size="large">
          <Form.Input icon="user" placeholder="Username" fluid />
          <Form.Input icon="lock" placeholder="Password" fluid />
          <Button color="facebook" fluid>
            Submit
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
