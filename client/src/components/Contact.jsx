import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>PIZZA2NIGHT Shop</h1>
            <p>
            At PIZZA2NIGHT we value your thoughts and inquiries. Whether you have questions about our menu, wish to make a reservation, or want to provide feedback on your dining experience, we're here to listen. Our team is dedicated to ensuring your visit is memorable, and your opinions matter to us. Feel free to contact us at your convenience, and we'll be delighted to assist you. Your satisfaction is our utmost priority, and we look forward to serving you soon. Our team is committed to ensuring your experience with us is exceptional. Please don't hesitate to reach out through phone, email, or our website's contact form. We value your input, and your satisfaction is our top priority. We eagerly await the opportunity to serve you and make your visit a memorable one.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>98786-456786</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>8408081308</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>pizza2night123@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
