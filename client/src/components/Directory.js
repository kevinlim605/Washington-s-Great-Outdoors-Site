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
    height: "430px"
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
      <Col xs={{ size: "8" }} sm={{ size: "6"}} lg={{size: "4"}} className="mt-4 mx-auto">
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
          <Link to={`/directory/${props.activity.name.toLowerCase()}`}>
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
  
  return (
    <Container>
      <div className="mt-5">
        <h1 className="text-center">Explore!</h1>
      </div>
      <Row>
        {props.activities.map(activity => {
          return (
            <RenderDirectoryCard classes={classes} activity={activity}/>
          )
        })}
      </Row>
    </Container>
  );
}

export default Directory;