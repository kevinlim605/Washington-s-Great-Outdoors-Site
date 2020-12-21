import React from "react";
import { Container, Row, Col } from "reactstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Kayaking() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Kayaking Locations</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/lakewenatchee.jpg"}
                        alt="loc 1"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Lake Wenatchee</h4>
                    <p><b>Difficulty: </b></p>
                    <p><b>Description: Two hours east of Seattle, this glacier-fed lake is a great day-paddle. With 12,623 ft of waterfront and mountain views encompassing the lake, there is plenty to explore. Start your paddle early in the morning if you want to avoid the windy conditions as the day progresses.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/pointdoughty.jpg"}
                        alt="loc 2"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Point Doughty</h4>
                    <p><b>Difficulty: </b></p>
                    <p><b>Description: Kayaking west along the shore you’ll be able to see harbor seals, bald eagles, starfish and even some harbor porpoises popping up from time to time. The park itself allows you to dock, hike to its ridge and take in gorgeous views of the surrounding islands and Mt. Baker.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/jonesisland.jpg"}
                        alt="loc 3"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Jones Island</h4>
                    <p><b>Difficulty: </b></p>
                    <p><b>Description: Located 5 miles from Friday Harbor within the San Juan Islands, Jones Island offers a relatively quick paddle to a secluded area with breathtaking views. Accessible only by boat, this island offers two campsites exclusively for human-powered boats on its western shore and several others on its southern shore. The pristine nature of the island along with 4 miles of hiking trails make Jones Island a perfect place to make camp for an evening or two.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/lakecrescent.jpg"}
                        alt="loc 4"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Lake Crescent</h4>
                    <p><b>Difficulty: </b></p>
                    <p><b>Description: Situated in the Olympic Peninsula, Lake Crescent is as gorgeous as it is deep (reportedly 600+ ft in areas!). With crystal clear blue water and 8.5 miles in length, there is plenty to see and explore on the lake. Kayak rentals are available from the Lake Crescent Lodge if desired.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/lakeunion.jpg"}
                        alt="loc 5"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Lake Union</h4>
                    <p><b>Difficulty: </b></p>
                    <p><b>Description: As the sun sets over Queen Anne Hill, there are few better places to be in Seattle than Lake Union. Sitting just 2 miles from downtown Seattle, the Lake is a quick escape from the hustle and bustle of the city. No matter the season, catching a sunset and dusk on the lake is absolutely stunning.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Kayaking;