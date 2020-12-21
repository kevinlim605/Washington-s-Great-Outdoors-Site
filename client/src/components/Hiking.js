import React from "react";
import { Container, Row, Col } from "reactstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Hiking() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Hiking Locations</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/horseshoebasin.jpg"}
                        alt="loc 1"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Horseshoe Basin</h4>
                    <p><b>Length: 12.0 miles, roundtrip</b></p>
                    <p><b>Description: A backpacking favorite where you can spend a day—or a week—exploring the wonders of this alpine landscape. Climb the local peaks, check out the Canadian border monuments, or kick back and watch the marmots. At night, listen for the coyotes and count stars.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/centralcascades.jpg"}
                        alt="loc 2"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Central Cascades</h4>
                    <p><b>Length: 12.0 miles, roundtrip</b></p>
                    <p><b>Description: Hike an iconic section of the PCT north of Snoqualmie Pass. This narrow and rocky trail also includes old-growth forest, gorgeous wildflowers, and stunning views into the Alpine Lakes Wilderness from both sides of the pass below Kendall Peak, where the Katwalk begins.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/mountangeles.jpg"}
                        alt="loc 3"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Mount Angeles</h4>
                    <p><b>Length: 6.25 miles, roundtrip</b></p>
                    <p><b>Description: You can't go wrong finding wildflowers at Hurricane Ridge in Olympic National Park. While many folks head up the paved path to Hurricane Hill, solitude seekers climb up the Mount Angeles trail and branch off to attain Sunrise Ridge. Phlox, penstemon, lupine, bistort, larkspur and more greet hikers here.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/nachespeakloop.jpg"}
                        alt="loc 4"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Naches Peak Loop</h4>
                    <p><b>Length: 3.2 miles, roundtrip</b></p>
                    <p><b>Description: This is a trail to save until August or September. In this short window of time, hikers will rejoice by frolicking along the trail surrounded by fields of wildflowers and soaking in one of the classic views of The Mountain. Because it's a short, flat, loop, this is our pick for taking out-of-towners who may not hike much.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/burroughsmountain.jpg"}
                        alt="loc 5"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Burroughs Mountain</h4>
                    <p><b>Length: 9.0 miles, roundtrip</b></p>
                    <p><b>Description: Potentially one of the most iconic Mount Rainier hikes, the Burroughs trail will get you up close and personal with the mountain -- so close you feel like you can touch the summit. It's near impossible to choose just one or two essential Mount Rainier hikes, but make this hike is so well-rounded, it makes the cut.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Hiking;