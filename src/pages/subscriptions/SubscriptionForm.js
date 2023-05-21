import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SubscriptionForm = () => {

  useRedirect('loggedIn')

  const [subscriptionData, setSubscriptionData] = useState({
    fullname: "",
    email: "",
  });
  const { fullname, email} = subscriptionData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSubscriptionData({
      ...subscriptionData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/subscriptions/", subscriptionData);
      history.push("/confirmation");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>subscribe to stay informed</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullname">
              <Form.Label className="d-none">fullname</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Fullname"
                name="fullname"
                value={fullname}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.fullname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="email">
              <Form.Label className="d-none">Email Address</Form.Label>
              <Form.Control
                className={styles.Input}
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Subscribe Now!
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

      </Col>
    </Row>
  );
};

export default SubscriptionForm;