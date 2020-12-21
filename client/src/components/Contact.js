import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { makeStyles, Button, TextField, Checkbox, Select, MenuItem, FormControl, FormHelperText, InputLabel, Modal, Backdrop, Fade } from "@material-ui/core";
import { Container, Row, Col, Label } from "reactstrap";

const useStyles = makeStyles((theme) => ({
    select: {
        minWidth: '100%',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
    firstName: yup.string().required('Required!').min(2, 'Too Short!').max(50, 'Too Long!'),
    lastName: yup.string().required('Required!').min(2, 'Too Short!').max(50, 'Too Long!'),
    email: yup.string().email('Invalid Email!').required('Required'),
    telNum: yup.string().matches(phoneRegex, 'Invalid Phone Number').required('Required!'),
    feedback: yup.string().required('Required!')
})

function TransitionsModal(props) {

    return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={props.classes.modal}
          open={props.open}
          onClose={props.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={props.open}>
            <div className={props.classes.paper}>
              <h2 id="transition-modal-title">Thank you for your feedback!</h2>
              <p id="transition-modal-description">Please keep in touch!</p>
            </div>
          </Fade>
        </Modal>
    );
  }

function Contact() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return( 
        <Container>
            <Row className="mb-4 mt-4">
                <Col>
                    <h1>Contact Us</h1>
                    <hr/>
                    <h4 className="mt-4">Send Us Your Feedback!</h4>
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
                    handleOpen();
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
                                    checked={props.values.agree}
                                    onClick={() => props.values.contactType = ""}
                                    as={Checkbox}
                                />
                            </Col>
                            {props.values.agree === false ? (
                                <Col xs={{size: "4"}} className="my-auto">
                                    <FormControl className={classes.select} variant="outlined">
                                        <InputLabel>contact type</InputLabel>
                                            <Field
                                                label="contact type"
                                                name="contactType"
                                                disabled
                                                as={Select}
                                            >
                                            </Field>
                                    </FormControl>
                                </Col>
                            ) : ( 
                                <Col xs={{size: "4"}} className="my-auto">
                                    <FormControl 
                                        className={classes.select} 
                                        variant="outlined" 
                                        error={!props.values.contactType && props.touched.contactType ? true : false}
                                    >
                                        <InputLabel>contact type</InputLabel>
                                            <Field
                                                label="contact type"
                                                name="contactType"
                                                as={Select}
                                            >
                                                <MenuItem value="Phone">By Phone</MenuItem>
                                                <MenuItem value="Email">By Email</MenuItem>
                                                <MenuItem value="Both">Both</MenuItem>
                                            </Field>
                                            {!props.values.contactType && props.touched.contactType ? (
                                                <FormHelperText>Required!</FormHelperText>
                                            ) : (null)
                                            }
                                    </FormControl>
                                </Col>
                            )}
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
                                <TransitionsModal 
                                    open={open} 
                                    handleOpen={handleOpen}
                                    handleClose={handleClose} 
                                    classes={classes} 
                                />
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