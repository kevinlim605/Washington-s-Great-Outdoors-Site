import React from "react";
import { Container, Row, Col } from "reactstrap";

function Biking() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Biking Locations</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/tigermountainloop.jpg"}
                        alt="loc 1"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Tiger Mountain Loop</h4>
                    <p><b>Length: 19.0 miles</b></p>
                    <p><b>Description: Welcome to Tiger Mountain, a popular multi-use recreation area that's seen an explosion of new trails and two-wheeled visitors. This loop details the mountain's most popular trails (as of 2017), but there's even more to see. There are some sections of road climbs, but the continued addition of singletrack means the riding only gets better year-to-year. Get ready for some long pedaling to access tons of exhilarating descents!</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/apecanyon.jpg"}
                        alt="loc 2"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Ape Canyon</h4>
                    <p><b>Length: 20.4 miles</b></p>
                    <p><b>Description: This ride initially takes you up the secluded but strenuous Ape Canyon Trail before continuing to the upper trail segments. As you ride along the canyon near the top of the climb, the views and terrain transform from shady forest to an amazing moonscape. The balance of the ride is across the vast pumice fields on the Loowit and Plains of Abraham trails at the base of Mt. St. Helens with views of several other peaks as well.</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/goldenspike.jpg"}
                        alt="loc 3"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Golden Spike</h4>
                    <p><b>Length: 5.6 miles</b></p>
                    <p><b>Description: The signature north-side Galbraith ride and an instant favorite (with a few changes due to logging operations in late 2017). This route starts with the standard north-side climb before taking riders on the entirety of Golden Spike, much of SST, and follows Back Door on a wicked fun descent that emerges onto Birch Falls Way.</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/cutthroattrail.jpg"}
                        alt="loc 4"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Cutthroat Trail</h4>
                    <p><b>Length: 11.7 miles</b></p>
                    <p><b>Description: This trail is a favorite on the bike. The first 1.7 miles climbs a mellow 400 ft as it follows Cutthroat Creek to Cutthroat Lake. (Take a peek at Cutthroat Lake by taking the 0.2 mile spur trail.) From the lake, the trail climbs another 1900 ft in 3.8 miles to Cutthroat Pass (6800 ft). Prepare for gorgeous mountain views! The trail is really nice for biking: the grade is never too steep and the singletrack is basically smooth and firm, with variable sections of sandy, or loose rocky Eastern Washington tread.</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/angelsstaircase.jpg"}
                        alt="loc 5"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Angels Staircase</h4>
                    <p><b>Length: 22.7 miles</b></p>
                    <p><b>Description: Angel's Staircase is a physically demanding, epic loop that takes you far from civilization, so bring plenty of food and water and make sure that you carry tools that you know how to use. The rewards are fantastic views of jagged mountains and into beautiful alpine basins filled with flowers, trees, and small lakes.</b></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Biking;