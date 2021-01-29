import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Comments from './Comments';

function ActivityInfo(props) {
  const [comments, setComments] = useState(false);

  const showComments = () => {
    setComments(!comments);
  };

  return (
    <Container>
      <Row className="mt-5 text-center">
        <Col>
          <h1>Check Out These Locations!</h1>
        </Col>
      </Row>
      {props.activity.map((activity) => {
        return (
          <div className="mb-5">
            <Row className="mt-4 align-items-sm-center align-items-lg-start">
              <Col
                sm={{ size: '12' }}
                lg={{ size: '6' }}
                className="mb-3 d-flex justify-content-center"
              >
                <img src={activity.image} alt="loc 1" className="rounded" />
              </Col>
              <Col
                xs={{ size: '12' }}
                sm={{ size: '11' }}
                lg={{ size: '6' }}
                className="mx-auto text-center text-lg-left"
              >
                <h4>
                  {activity.location} <FavoriteBorderIcon fontSize="large" />
                </h4>
                <p>
                  <b>{activity.descriptor}</b>
                </p>
                <p>
                  <b>Description: {activity.description}</b>
                </p>
                <div onClick={showComments}>
                  <p>See Comments...</p>
                </div>
              </Col>
            </Row>
            {comments ? (
              <div className="tableSelector mt-4">
                <Comments />
              </div>
            ) : null}
            {/* <div className="tableSelector mt-4">
              <Comments />
            </div> */}
          </div>
        );
      })}
    </Container>
  );
}

export default ActivityInfo;
