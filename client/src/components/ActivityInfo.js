import React from "react";
import { Container, Row, Col } from "reactstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function ActivityInfo(props) {
    return(
        <Container>
            <Row className="mt-5 text-center">
                <Col>
                    <h1>Check Out These Locations!</h1>
                </Col>
            </Row>
            {props.activity.map(activity => {
                return (
                    <Row className="mt-5">
                        <Col sm={{ size: "12" }} lg={{ size: "6"}} className="mb-3 d-flex justify-content-center">
                            <img 
                                src={activity.image}
                                alt="loc 1"
                                className="rounded"
                            />
                        </Col>
                        <Col sm={{ size: "9" }} lg={{ size: "6"}} className="mx-auto text-center text-lg-left"> 
                            <h4>{activity.name}</h4>
                            <p><b>{activity.descriptor}</b></p>
                            <p><b>Description: {activity.description}</b></p>
                            <div>
                                <FavoriteBorderIcon fontSize="large"/>
                            </div>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    )
};

export default ActivityInfo;