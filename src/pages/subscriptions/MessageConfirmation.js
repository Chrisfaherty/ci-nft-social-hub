import React from "react";
import styles from "../../styles/SubscriptionConfirmation.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";


const MessageConfirmationForm = () => {
  useRedirect("loggedOut");
  return (    
    <Row className={styles.Row}>
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Message Recieved!</h1>
          <p className="text-center">Thank you for getting in touch, We will get back to you ASAP!</p>
          <p className="text-center">You can only submit one Form at a time.</p>
          <p className="text-center">So please don't try to resubmit.</p>
          <p className="text-center">We can discuss further questions after we get to your ticket.</p>  
        </Container>
      </Col>
    </Row>
  );
};

export default MessageConfirmationForm;