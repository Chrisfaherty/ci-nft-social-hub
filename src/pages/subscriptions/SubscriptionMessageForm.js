import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/SubscriptionConfirmation.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";


const SubscriptionMessageForm = () => {
  useRedirect("loggedOut");
  const [SubscriptionMessageData, setSubscriptionMessageData] = useState({
    fullname: "",
    email: "",
    title: "",
    message: "",
  });

  const { fullname, email, title, message } = SubscriptionMessageData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSubscriptionMessageData({
      ...SubscriptionMessageData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/subscriptionmessages/", SubscriptionMessageData);
      history.push("/messageconfirmation");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (    
    <Row className={styles.Row}>
      
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
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

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={message}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.message?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
            className={`${btnStyles.Button} ${btnStyles.Black}`}
            type="submit"
            >
              Submit
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

export default SubscriptionMessageForm;