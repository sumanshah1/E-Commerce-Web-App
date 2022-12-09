import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";
import login1 from "../images/login2.jpg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, isLoading, error }] = useLoginMutation();
  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <h1>Login to account</h1>
          <Form style={{ width: "60%" }} onSubmit={handleLogin}>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" disabled={isLoading}>
                Login
              </Button>
            </Form.Group>

            <p className="pt-3 text-center">
              Don't have an account? <Link to="/signup">Create account</Link>{" "}
            </p>
          </Form>
        </Col>
        <Col md={6} className="login__image--container">
          <img src={login1} className="home-banner login-banner" />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
