import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { makeStyles, Button, TextField, Checkbox, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { Container, Row, Col, Label } from "reactstrap";

const useStyles = makeStyles({
    select: {
        minWidth: '100%',
    }
});

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
    firstName: yup.string().required('Required!').min(2, 'Too Short!').max(50, 'Too Long!'),
    lastName: yup.string().required('Required!').min(2, 'Too Short!').max(50, 'Too Long!'),
    email: yup.string().email('Invalid Email!').required('Required'),
    telNum: yup.string().matches(phoneRegex, 'Invalid Phone Number').required('Required!'),
    feedback: yup.string().required('Required!')
})

function Contact() {

    const classes = useStyles();

    return( 
        <Container>
            <Link to="/home">
                Home
            </Link>
            <Row className="mb-4 mt-4">
                <Col>
                    <h1>Contact Us</h1>
                    <h4>Send Us Your Feedback!</h4>
                </Col>
            </Row>
            <Formik 
                initialValues={{ 
                    firstName: "", 
                    lastName: "", 
                    email: "", 
                    telNum: "", 
                    agree: false,
                    contactType: "",
                    feedback: ""
                }} 
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    console.log("submit: ", data);
                    resetForm();
                    setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {(props) => (
                    <Form>
                        <Row>
                            <Col xs={{size: "4"}}>
                                <Field
                                    name="firstName"
                                    value={props.values.firstName}
                                    error={props.errors.firstName && props.touched.firstName ? true : false}
                                    label="first name"
                                    helperText={props.touched.firstName ? props.errors.firstName : ""}
                                    variant="outlined"
                                    fullWidth 
                                    as={TextField}
                                />
                            </Col>
                            <Col xs={{size: "4"}}>
                                <Field
                                    name="lastName"
                                    value={props.values.lastName}
                                    error={props.errors.lastName && props.touched.lastName ? true : false}
                                    label="last name"
                                    helperText={props.touched.lastName ? props.errors.lastName : ""}
                                    variant="outlined"  
                                    fullWidth
                                    as={TextField}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={{size: "8"}}>
                                <Field
                                    name="email"
                                    value={props.values.email}
                                    error={props.errors.email && props.touched.email ? true : false}
                                    label="email"
                                    helperText={props.touched.email ? props.errors.email : ""}
                                    variant="outlined"  
                                    fullWidth
                                    as={TextField}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={{size: "8"}}>
                                <Field
                                    name="telNum"
                                    value={props.values.telNum}
                                    error={props.errors.telNum && props.touched.telNum ? true : false}
                                    label="phone number"
                                    helperText={props.touched.telNum ? props.errors.telNum : ""}
                                    variant="outlined"  
                                    fullWidth
                                    as={TextField}
                                />                            
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={{size: "4"}}>
                                <Label>May We Contact You?</Label>
                                <Field
                                    name="agree"
                                    as={Checkbox}
                                />
                            </Col>
                            <Col xs={{size: "4"}} className="my-auto">
                                <FormControl className={classes.select} variant="outlined">
                                    <InputLabel>contact type</InputLabel>
                                        <Field
                                            label="contact type"
                                            name="contactType"
                                            as={Select}
                                        >
                                            <MenuItem value="">Select...</MenuItem>
                                            <MenuItem value="Phone">By Phone</MenuItem>
                                            <MenuItem value="Email">By Email</MenuItem>
                                            <MenuItem value="Both">Both</MenuItem>
                                        </Field>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={{size: "8"}}>
                                <Field
                                    name="feedback"
                                    value={props.values.feedback}
                                    error={props.errors.feedback && props.touched.feedback ? true : false}
                                    helperText={props.touched.feedback ? props.errors.feedback : ""}
                                    label="your feedback"
                                    variant="outlined"
                                    fullWidth
                                    multiline="true"
                                    rows="8"
                                    as={TextField}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Button 
                                    variant="contained" 
                                    disabled={props.isSubmitting}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <pre>
                                    {JSON.stringify(props.values, null, 2)}
                                </pre>
                                <pre>
                                    {JSON.stringify(props.errors, null, 2)}
                                </pre>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default Contact;