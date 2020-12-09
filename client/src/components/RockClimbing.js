import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function RockClimbing() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <Link to="/home">
                        Home
                    </Link>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <a href="https://placeholder.com">
                        <img 
                            src="https://via.placeholder.com/390x270" 
                            alt="loc 1"
                            className="rounded float-left"
                        />
                    </a>
                </Col>
                <Col xs={{ size: "4" }}>
                    <h4>Name</h4>
                    <p><b>Difficulty:</b></p>
                    <p><b>Description:</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <a href="https://placeholder.com">
                        <img 
                            src="https://via.placeholder.com/390x270" 
                            alt="loc 1"
                            className="rounded float-left"
                        />
                    </a>
                </Col>
                <Col xs={{ size: "4" }}>
                    <h4>Name</h4>
                    <p><b>Difficulty:</b></p>
                    <p><b>Description:</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <a href="https://placeholder.com">
                        <img 
                            src="https://via.placeholder.com/390x270" 
                            alt="loc 1"
                            className="rounded float-left"
                        />
                    </a>
                </Col>
                <Col xs={{ size: "4" }}>
                    <h4>Name</h4>
                    <p><b>Difficulty:</b></p>
                    <p><b>Description:</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <a href="https://placeholder.com">
                        <img 
                            src="https://via.placeholder.com/390x270" 
                            alt="loc 1"
                            className="rounded float-left"
                        />
                    </a>
                </Col>
                <Col xs={{ size: "4" }}>
                    <h4>Name</h4>
                    <p><b>Difficulty:</b></p>
                    <p><b>Description:</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <a href="https://placeholder.com">
                        <img 
                            src="https://via.placeholder.com/390x270" 
                            alt="loc 1"
                            className="rounded float-left"
                        />
                    </a>
                </Col>
                <Col xs={{ size: "4" }}>
                    <h4>Name</h4>
                    <p><b>Difficulty:</b></p>
                    <p><b>Description:</b></p>
                </Col>
            </Row>
        </Container>
    )
}

export default RockClimbing;