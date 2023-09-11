import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
            Terms and Policies
            </h6>
            <p>
            Welcome to PIZZA2NIGHT! We want your dining experience to be delightful and enjoyable. Please take a moment to review our terms and policies.
            </p>
            <h6>
            Reservation Policy:
            </h6>
            <p>
            Reservations are highly recommended, especially during peak hours.
             To make a reservation, please call us at 8478684786.
             We kindly request that you arrive on time for your reservation. If you're running late, please notify us in advance.
            </p>
            <h6>
            Cancellation Policy:
            </h6>
            <p>
            If you need to cancel or change your reservation, please do so at least 6 hours before your scheduled reservation time.
               Late cancellations or no-shows may be subject to a cancellation fee.
            </p>
            <h6>
            Payment Policy:
            </h6>
            <p>
            We accept major credit cards and cash for payment.
             Service charge and applicable taxes will be added to your bill.
            </p>
            <h6>
            Feedback and Suggestions:
            </h6>
            <p>
            We value your feedback. If you have any suggestions or concerns, please feel free to share them with us.
            </p>
            <h6>
            Privacy Policy:
            </h6>
            <p>
            We respect your privacy and will not share your personal information with third parties.
           We may collect data for reservation and contact purposes only.
            </p>
            <h6>
            COVID-19 Safety:
            </h6>
            <p>
            We prioritize the safety of our guests and staff. Please adhere to any safety measures and guidelines posted in our establishment.
Thank you for choosing [Your Restaurant Name]. We appreciate your patronage and look forward to serving you. If you have any questions or require further assistance, please don't hesitate to ask our staff. Enjoy your dining experience!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
