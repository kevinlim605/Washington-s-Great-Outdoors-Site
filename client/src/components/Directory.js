import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Directory() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
    <Link to="/home">
    Home
    </Link>
    <div className="row">
        <div className="col-4">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            H
          </Avatar>
        }
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
    </div>
    <div className="col-4">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
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
    </div>
    <div className="col-4">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            K
          </Avatar>
        }
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
          Feel the rush of taking on some of Washington's finest river rapids or the calm of it's great rivers.
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
    </div>
    </div>
    <div className="row mt-4">
    <div className="col-4 offset-2">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Fishing"
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
    </div>
    <div className="col-4">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Camping"
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
          Take in the fresh outdoors and step away from the comfort of your home and into the comfort of mother nature.
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
    </div>
    </div>
    </div>
  );
}

export default Directory;