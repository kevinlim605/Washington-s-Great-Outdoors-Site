import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Container, Row, Col, FormGroup, Label } from "reactstrap";

function Contact() {
    return( 
        <Container>
            <Link to="/home">
                Home
            </Link>
            <Row>
                <Col>
                    <h1>Contact Us</h1>
                    <h4>Send Us Your Feedback!</h4>
                </Col>
            </Row>
            <Formik>
                <Form>
                    <Row className="form-group">
                        <Col xs={{size: 2}} className="my-auto">
                            <Label htmlFor="firstname">First Name:</Label>
                        </Col>
                        <Col xs={{size: 3}}>
                            <Field className="form-control" type="text" name="firstname" placeholder="first name"></Field>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs={{size: 2}} className="my-auto">
                            <Label htmlFor="lastname">Last Name:</Label>
                        </Col>
                        <Col xs={{size: 3}}>
                            <Field className="form-control" type="text" name="lastname" placeholder="last name"></Field>
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </Container>
    );
}

export default Contact;