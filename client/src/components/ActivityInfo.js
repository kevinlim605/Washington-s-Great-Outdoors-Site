import React from "react";
import { Container, Row, Col } from "reactstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function ActivityInfo(props) {
    return(
        <Container>
            {props.activity.map(activity => {
                return (
                    <Row className="mt-4">
                        <Col xs={{ size: "5" }}>
                            <img 
                                src={activity.image}
                                alt="loc 1"
                                className="rounded float-left"
                            />
                        </Col>
                        <Col xs={{ size: "6" }}>
                            <h4>{activity.name}</h4>
                            <p><b>{activity.descriptor}</b></p>
                            <p><b>Description: {activity.description}</b></p>
                            <FavoriteBorderIcon fontSize="large"/>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    )
};

export default ActivityInfo;