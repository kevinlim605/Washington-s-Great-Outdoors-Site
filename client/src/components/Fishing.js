import React from "react";
import { Container, Row, Col } from "reactstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Fishing() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Fishing Locations</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/columbiarivergorge.jpg"}
                        alt="loc 1"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Columbia River Gorge</h4>
                    <p><b>Types of Catch: Walleye, Sturgeon, Steelhead, Chinook, Coho, Sockeye, Bass, Shad, Catfish, and Panfish</b></p>
                    <p><b>Description: The Gorge is a 90-mile canyon in the Cascade Mountain range and the main stem of the Columbia River runs right through the middle of it. Among the most preferred sections to fish in the Gorge are from the Bonneville Dam all the way up to the John Day Dam.
                    Also known as the Dalles pool, the Columbia is known for prime fishing waters and attracts sports fishing enthusiasts from around the country.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/skykomishriver.jpg"}
                        alt="loc 2"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Skykomish River</h4>
                    <p><b>Types of Catch: Summer Steelhead, Dolly Varden, Pink Salmon, Coho Salmon, Chum Salmon, Chinook Salmon and Trout</b></p>
                    <p><b>Description: One of Washington true fishing treasures is the Skykomish river located just 45 minutes outside of Seattle. This river systems regularly ranks in the top ten for steelhead fishing with healthy runs of hatchery steelhead and both summer and winter wild steelhead. The Skykomish is un-dammed and free-flowing from its headwaters at the South and North Forks to the lower reaches where it meets up with the Snoqualmie to form the Snohomish.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/snohomishriver.jpg"}
                        alt="loc 3"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Snohomish River</h4>
                    <p><b>Types of Catch: Coho Salmon, Pink Salmon, Chum Salmon Chinook Salmon, and Summer/Winter Steelhead</b></p>
                    <p><b>Description: Just beyond the rolling suburban hills of Seattle lies the Snohomish River, which hosts some of the best salmon fishing anywhere in Washington State. Snohomish River salmon fishing is a passtime that anyone in the Everett and Seattle areas to get into fishing in their backyard. The Snohomish River sees returns of Coho Salmon, Pink Salmon, Chum Salmon and Chinook Salmon as well as Summer Steelhead and Winter Steelhead. During the fall salmon fishing season, the river becomes a gathering place for local fishermen. </b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/lakewashington.jpg"}
                        alt="loc 4"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Lake Washington</h4>
                    <p><b>Types of Catch: Cutthroat Trout, Coho Salmon, Sockeye Salmon, Chinook Salmon, Rainbow trout, Yellow Perch</b></p>
                    <p><b>Description: Lake Washington covers 22,138 acres, is over 15 miles long and offers a vast array of recreational opportunities for its visitors. It is the largest of the three major lakes in King County, and the second largest natural lake in the State of Washington. The lake holds most all species of spiny rays as well as several species of trout. In addition there are runs of salmon and cutthroat which go through the lake as they return to their native streams.</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/edmondspier.jpg"}
                        alt="loc 5"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Edmonds Pier</h4>
                    <p><b>Types of Catch: Rockfish, Flounder, Cabezon, Sculpin, Greenling, Dogfish, Ratfish, and Ling Cod, Salmon, Crab, Squid</b></p>
                    <p><b>Description: If you’re heading to the beautiful state of Washington and want to fish Puget Sound without a boat, you are likely to end up at the Edmonds Fishing Pier. It’s an “L” shaped pier that totals 944 feet and runs parallel to the coast, offering anglers plenty of room to reel in their catch. Built in 1975, the Edmonds Fishing Pier is among Puget Sound’s most popular fishing spots, with over 100,000 anglers visiting each year. Salmon can be caught all year around, and crabbing and squid fishing is a must as well!</b></p>
                    <FavoriteBorderIcon fontSize="large"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Fishing;