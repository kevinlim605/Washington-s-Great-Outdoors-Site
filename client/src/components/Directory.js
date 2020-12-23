import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, 
Card, 
CardHeader, 
CardMedia, 
CardContent, 
CardActions, 
IconButton, 
Typography, } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Row, Col } from "reactstrap"

const useStyles = makeStyles({
  root: {
    Width: 345,
    height: 418,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  card: {
    backgroundColor: '#999999',
  }
});

function RenderDirectoryCard (props) {
  return (
      <Col xs={{size: "4"}}>
        <Card className={props.classes.root}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            className={props.classes.card}
            title={props.activity.name}
            subheader="Check out our locations"
          />
          <Link to={`/directory/${props.activity.name}`}>
            <CardMedia
              className={props.classes.media}
              image={props.activity.image}
            />
          </Link>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.activity.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Col>
  );
}


function Directory(props) {
  
  const classes = useStyles();

  const row1 = [];
  const row2 = [];

  for (let i = 0; i < 3; i++) {
    row1.push(<RenderDirectoryCard classes={classes} activity={props.activities[i]}/>)
  }

  for (let i = 3; i < 6; i++) {
    row2.push(<RenderDirectoryCard classes={classes} activity={props.activities[i]}/>)
  }
  
  return (
    <Container>
      <div className="mt-4">
        <h1 className="text-center">Explore!</h1>
      </div>
      <Row className="mt-4">
        {row1}
      </Row>
      <Row className="mt-4">
        {row2}
      </Row>
    </Container>
  );
}

export default Directory;