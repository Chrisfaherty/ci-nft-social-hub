import React from "react";
import styles from "../../styles/SubscriptionConfirmation.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";


const Confirmation = () => {
  useRedirect("loggedOut");
  return (    
    <Row className={styles.Row}>
      
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Subscription Confirmed</h1>
          <p className="text-center">Now you can keep up to date with all the latest features we roll out in the future.</p>    
        </Container>
      </Col>
    </Row>
  );
};

export default Confirmation;