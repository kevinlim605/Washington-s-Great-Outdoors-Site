import React from "react";
import { Container, Row, Col } from "reactstrap";

function Camping() {
    return(
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Camping Locations</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/greyowlhollow.jpg"}
                        alt="loc 1"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Grey Owl Hollow</h4>
                    <p><b>Activities: Biking, Hiking, Wildlife Watching</b></p>
                    <p><b>Description: Come relax in the deep quiet and stillness of a 1 acre fir tree forest, and then stroll through 4 acres of meadows and fruit trees as the sun sets. If you are feeling adventurous, explore the thick 16-acre cedar, fir, maple and alder forest beyond the meadow, or spread out into the hundreds of open acres that surround Grey Owl Hollow.</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/olympiclowlandforestsanctuary.jpg"}
                        alt="loc 2"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Olympic Lowland Forest Sanctuary</h4>
                    <p><b>Activities: Biking, Wildlife Watching</b></p>
                    <p><b>Description: Secluded campsites nestled among cedars, firs, hemlock and maples.  Community firepit has chairs & free firewood.  The nearby 'Shelter' features cold running water, a picnic table & countertop for indoor/outdoor food prep & dining. Safe, secure, private, scenic. The Olympic Lowland Forest Sanctuary is a place for peace and quiet where you can enjoy the woods.</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/thelanding.jpg"}
                        alt="loc 3"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>The Landing</h4>
                    <p><b>Activities: Biking, Boating, Fishing, Hiking, Horseback riding, Paddling, Climbing, Wildlife Watching</b></p>
                    <p><b>Description: Welcome to The Landing at Index - located on the South Fork Skykomish River, in the western foothills of the Cascade Mountains, off of Highway 2. With 16 acres of beautiful, private woods and breathtaking views of Mt. Index, this is a wonderful getaway to kick back and relax after your day of adventures, or just to escape the city rush. A rather peaceful setting, including the rushing sound of the river and the occasional whistle of a train. You will feel refreshed and rejuvenated after you stay at The Landing.</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/naturecamp.jpg"}
                        alt="loc 4"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Nature Camp</h4>
                    <p><b>Activities: Hiking, Wildlife Watching</b></p>
                    <p><b>Description: Nature Camp is a magical experience that immerses you in nature and all it's wonder. It is a beautiful forest garden with lots of wildlife and lush edible plants. If you've been feeling like you need to get away, leave your electronics and your chaotic, busy lives behind, Mother Nature is calling you. 8 acres of trails and forest garden is waiting for you to explore</b></p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={{ size: "5" }}>
                    <img 
                        src={"/images/mountbakernationalrecreationarea.jpg"}
                        alt="loc 5"
                        className="rounded float-left"
                    />
                </Col>
                <Col xs={{ size: "6" }}>
                    <h4>Mount Baker National Recreation Area</h4>
                    <p><b>Activities: Biking, Boating, Fishing, Hiking, Horseback riding, Climbing, Snow sports, Swimming, Wildlife watching</b></p>
                    <p><b>Description: Outdoorsy folk, allow me to introduce you to the real Four Seasons Hotel! From hiking, biking, and navigating steep crags in the summer, to skiing, snowshoeing, and snowmobiling winding trails in the winter, Mount Baker National Recreation Area is the premier four-star destination in northeastern Washington. </b></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Camping;