import React from "react";
import { Container, Row, Col } from "reactstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Climbing() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Climbing Locations</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/washingtonpass.jpg"}
                        alt="loc 1"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Washington Pass</h4>
                    <p><b>Climbing Style: Granite</b></p>
                    <p><b>Description: This amazing, alpine granite paradise is situated right on the Cascade Crest with a starting elevation of 4,875! As climbers, the main draw here is the Liberty Group. When approached from the east by Winthrop, the massive, immaculate granite formations stand like sentinels guarding the area. Unlike other alpine rock in the Cascades, these granite escarpments have long, continuous crack systems. These systems mean the rock is less crumbly and more consistently sustained, making for a much more pleasant and straight-forward climbing experience.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/index.jpg"}
                        alt="loc 2"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Index</h4>
                    <p><b>Climbing Style: Sport, Aid, Trad, Free</b></p>
                    <p><b>Description: Index is legendary in climbing circles. Off the map to outsiders for most of its history, due to its notoriety as an aid climbing venue, the ‘80s saw many old aid lines go free. Later, the ‘90s gave birth to a smattering of bolted sport routes. As progress continued, it was inevitable that Index would not stay a locals only spot for long. The style here is very trad—even the sport lines, short of the slab and knobby face routes have the feel. </b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/mountbaker.jpg"}
                        alt="loc 3"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Mount Baker</h4>
                    <p><b>Climbing Style: Ice climbing, Glacier Climbing</b></p>
                    <p><b>Description: Rising to 10,781feet with a nearly 9,000 feet prominence from sea level, MountBaker demands to be climbed. When viewed from nearby Bellingham, her relief is dramatic! For those wishing to climb Baker, it would be wise to know that after Mount Rainier to the south, Baker is the most glaciated mountain in the lower 48. Indigenous peoples called the mountain Kulshan before white settlers renamed the geological wonder. Kulshan is translated into a multitude of names including “white sentinel,” “puncture wound,” and “crater.”</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/mountrainier.jpg"}
                        alt="loc 4"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Mount Rainier</h4>
                    <p><b>Climbing Style: Mountaineering</b></p>
                    <p><b>Description: Mount Rainier needs little introduction. Rising from the continental shelf of the Pacific to an impressive 14,411ft, this volcano (yes, an active volcano) dominates everyone’s skyline from Everette to Olympia. It is so big, Mount Rainier creates its own weather, which should be top of mind for climbers once standing at its base. Weather determines how long you can be up there until the mountain’s mood changes.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/leavenworth.jpg"}
                        alt="loc 5"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Leavenworth</h4>
                    <p><b>Climbing Style: Granite</b></p>
                    <p><b>Description: As you drive into Leavenworth, it becomes quickly apparent that you are no longer in a PNW, but rather an 18th century Bavarian village somewhere in the Alps. It may seem that Leavenworth is less of a destination for rock climbers as it is for boaters, anglers, and retirees looking for a quirky vacation with a Swiss theme. After the railroad rerouted outside of the town in the early 1900s, the town struggled to maintain. Then in the 1960s, town leaders decided to exploit their Alps-like location by creating a themed town to attract visitors, complete with its own seasonal festivals. </b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Climbing;