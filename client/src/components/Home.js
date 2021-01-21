import React from "react";
import { Container, Row, Col } from "reactstrap";

function Home() {
    return( 
        <Container>
            <Row className="mt-5">
                <Col className="text-center text-lg-left">
                    <h1>Find Your Next Adventure!</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={{size: 6}} className="mb-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ullamcorper velit. Phasellus feugiat turpis nec orci placerat pretium. Suspendisse imperdiet ultrices sapien, ullamcorper condimentum ligula tincidunt sit amet. Praesent euismod nisi nisi, at volutpat est vulputate sed. Etiam neque libero, interdum a lectus vitae, euismod hendrerit nisl. Donec elementum bibendum odio, at facilisis tellus dapibus quis. Nullam eget est lacus. Aenean facilisis neque nec felis condimentum finibus. Nam sed placerat velit. Vestibulum ornare mollis ipsum, non tincidunt sapien sodales sit amet. Nunc placerat lorem non congue semper. Vestibulum ornare mollis ipsum, non tincidunt sapien sodales sit amet. Nunc placerat lorem non congue semper.</p>
                </Col>
                <Col lg={{size: 6}} className="d-flex justify-content-lg-end justify-content-center"> 
                    <img src="/images/homepicture1.jpg"/>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center text-lg-right">
                    <h1>Your Journey Begins Now!</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{order: 2}} lg={{size: 6, order: 1}} className="d-flex justify-content-center justify-content-lg-start"> 
                    <img src="/images/homepicture2.jpg"/>
                </Col>
                <Col xs={{order: 1}} lg={{size: 6, order: 2}} className="d-flex justify-content-lg-end justify-content-center mb-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ullamcorper velit. Phasellus feugiat turpis nec orci placerat pretium. Suspendisse imperdiet ultrices sapien, ullamcorper condimentum ligula tincidunt sit amet. Praesent euismod nisi nisi, at volutpat est vulputate sed. Etiam neque libero, interdum a lectus vitae, euismod hendrerit nisl. Donec elementum bibendum odio, at facilisis tellus dapibus quis. Nullam eget est lacus. Aenean facilisis neque nec felis condimentum finibus. Nam sed placerat velit. Vestibulum ornare mollis ipsum, non tincidunt sapien sodales sit amet. Nunc placerat lorem non congue semper. Vestibulum ornare mollis ipsum, non tincidunt sapien sodales sit amet. Nunc placerat lorem non congue semper.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center text-lg-left">
                    <h1>Discovery Awaits!</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={{size: 6}} className="mb-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ullamcorper velit. Phasellus feugiat turpis nec orci placerat pretium. Suspendisse imperdiet ultrices sapien, ullamcorper condimentum ligula tincidunt sit amet. Praesent euismod nisi nisi, at volutpat est vulputate sed. Etiam neque libero, interdum a lectus vitae, euismod hendrerit nisl. Donec elementum bibendum odio, at facilisis tellus dapibus quis. Nullam eget est lacus. Aenean facilisis neque nec felis condimentum finibus. Nam sed placerat velit. Vestibulum ornare mollis ipsum, non tincidunt sapien sodales sit amet. Nunc placerat lorem non congue semper. Vestibulum ornare mollis ipsum, non tincidunt sapien sodales sit amet. Nunc placerat lorem non congue semper.</p>
                </Col>
                <Col lg={{size: 6}} className="d-flex justify-content-lg-end justify-content-center"> 
                    <img src="/images/homepicture3.jpg"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;