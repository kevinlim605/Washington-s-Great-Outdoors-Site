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
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
});

function Directory() {

  const classes = useStyles();

  return (
    <Container>
      <div className="mt-4">
        <h2 className="text-center">Explore!</h2>
      </div>
      <Row className="mt-4">
        <Col xs={{size: "4"}}>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Hiking"
              subheader="Check out our locations"
            />
            <Link to="/directory/hiking">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                  Hike across mountainous, scenic trails found abundant throughout the pacific northwest.
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
        <Col xs={{size: "4"}}>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Biking"
              subheader="Check out our locations"
            />
            <Link to="/directory/biking">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Bring your bike and check out these perfect trails for the everyday cyclist.
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
        <Col xs={{size: "4"}}>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Kayaking"
              subheader="Check out our locations"
            />
            <Link to="/directory/kayaking">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Feel the rush of taking on some of Washington's river rapids and great rivers.
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
      </Row>
      <Row className="mt-4">
        <Col xs={{size: "4"}}>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Fishing"
              subheader="Check out our locations"
            />
            <Link to="/directory/fishing">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Catch all types of abundant fish, ranging from salmon to trout to even squid!
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
        <Col xs={{size: "4"}}>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Camping"
              subheader="Check out our locations"
            />
            <Link to="/directory/camping">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Step away from the comfort of your home and into the comfort of mother nature.
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
        <Col xs={{size: "4"}}>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Rock Climbing"
              subheader="Check out our locations"
            />
            <Link to="/directory/rockclimbing">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Take the challenge! Check out these awesome spots for testing your skills.
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
      </Row>
    </Container>
  );
}

export default Directory;