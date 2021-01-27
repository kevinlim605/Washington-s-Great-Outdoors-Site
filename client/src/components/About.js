import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function About() {
  return (
    <Container>
      <div className="mt-5 text-center">
        <h1>Our Mission</h1>
      </div>
      <Row className="mt-4">
        <Col xs={{ size: 7 }} className="mx-auto">
          <p style={{ fontSize: '18px' }}>
            Nulla ac sapien et lectus pharetra fringilla. Nullam ultrices
            convallis arcu, nec vulputate nisl elementum ut. Quisque sagittis
            nibh at orci iaculis dictum. Nunc nec tortor est. Quisque aliquam
            bibendum nibh eu rhoncus. Morbi gravida, massa eget dapibus rutrum,
            libero diam viverra elit, in cursus quam nisl ac erat. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Maecenas velit libero,
            finibus vel porta eget, accumsan id mauris. Ut aliquet nec sapien ac
            molestie. Mauris nibh urna, condimentum eu ligula et, pretium
            convallis quam. Curabitur et augue est. Morbi lorem quam, vestibulum
            eu fringilla quis, ornare ac nulla. Morbi ullamcorper condimentum
            odio, aliquet sagittis metus suscipit ut. Aliquam sed luctus nulla,
            sollicitudin tincidunt ligula. Donec dolor libero, mattis vel dictum
            at, elementum a diam. Aenean ac est nec lectus fringilla pulvinar
            nec in tellus.
          </p>
          <p style={{ fontSize: '18px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            sapien sit amet odio laoreet faucibus. Ut dolor mi, feugiat ut
            ligula sed, lacinia aliquet diam. Proin mollis ullamcorper vehicula.
            Praesent hendrerit porttitor lobortis. Ut aliquet purus quis commodo
            commodo. Nulla sed justo congue, dapibus velit sit amet, semper
            lectus. Suspendisse molestie tristique enim vel auctor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse
            pellentesque nisl maximus purus bibendum hendrerit. Vestibulum et
            iaculis orci.
          </p>
        </Col>
        <Col xs={{ size: 5 }} className="d-none d-lg-block">
          <img
            src="/images/aboutpicture1.jpg"
            alt="aboutpicture1"
            className="rounded"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          xs={{ size: 5 }}
          className="d-flex justify-content-lg-end d-sm-none d-lg-block"
        >
          <img
            src="/images/aboutpicture2.jpg"
            alt="aboutpicture2"
            className="rounded"
          />
        </Col>
        <Col xs={{ size: 7 }} className="mx-auto">
          <p style={{ fontSize: '18px' }}>
            Nulla ac sapien et lectus pharetra fringilla. Nullam ultrices
            convallis arcu, nec vulputate nisl elementum ut. Quisque sagittis
            nibh at orci iaculis dictum. Nunc nec tortor est. Quisque aliquam
            bibendum nibh eu rhoncus. Morbi gravida, massa eget dapibus rutrum,
            libero diam viverra elit, in cursus quam nisl ac erat. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Maecenas velit libero,
            finibus vel porta eget, accumsan id mauris. Ut aliquet nec sapien ac
            molestie. Mauris nibh urna, condimentum eu ligula et, pretium
            convallis quam. Curabitur et augue est. Morbi lorem quam, vestibulum
            eu fringilla quis, ornare ac nulla. Morbi ullamcorper condimentum
            odio, aliquet sagittis metus suscipit ut. Aliquam sed luctus nulla,
            sollicitudin tincidunt ligula. Donec dolor libero, mattis vel dictum
            at, elementum a diam. Aenean ac est nec lectus fringilla pulvinar
            nec in tellus.
          </p>
          <p style={{ fontSize: '18px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            sapien sit amet odio laoreet faucibus. Ut dolor mi, feugiat ut
            ligula sed, lacinia aliquet diam. Proin mollis ullamcorper vehicula.
            Praesent hendrerit porttitor lobortis. Ut aliquet purus quis commodo
            commodo. Nulla sed justo congue, dapibus velit sit amet, semper
            lectus. Suspendisse molestie tristique enim vel auctor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse
            pellentesque nisl maximus purus bibendum hendrerit. Vestibulum et
            iaculis orci.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
