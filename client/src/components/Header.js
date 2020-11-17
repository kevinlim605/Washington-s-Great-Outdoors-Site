import React, { Fragment } from "react";
import { Jumbotron } from "reactstrap";
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();
    return(
        <Fragment>
            <Jumbotron fluid>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Washington's Great Outdoors</h1>
                            <h2>Embrace the PNW</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className={classes.root}>
            <AppBar position="static">
                <div class="container">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </div>
            </AppBar>
            </div>
        </Fragment>
    );
}

export default Header;