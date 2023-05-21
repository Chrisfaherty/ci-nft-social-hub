import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/ContactConfirmation.module.css";
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


const SubscriptionForm = () => {
  useRedirect("loggedOut");
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
  });

  const { fullname, email } = contactData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/subscription/", contactData);
      history.push("/confirmation");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (    
    <Row className={styles.Row}>
      
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Subscribe Today!</h1>
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
            {errors.fname?.map((message, idx) => (
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

            <Button
            className={btnStyles.Button}
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

export default SubscriptionForm;