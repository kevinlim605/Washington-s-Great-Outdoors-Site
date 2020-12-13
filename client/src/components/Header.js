import React, { Fragment } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Menu, MenuItem } from "@material-ui/core";
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
    toolbar: {
        padding: 0,
    }
}));

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return(
        <Fragment>
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col style={{color: 'white'}}>
                            <h1>Washington's Great Outdoors</h1>
                            <h2>Embrace the PNW</h2>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <div className={classes.root}>
            {/* AppBar and ToolBar used in conjunction. Appbar gives styling. Toolbar gives positioning,
                and structure. */}
            <AppBar position="static" style={{backgroundColor: '#86592d'}}>
                <Container>
                <Toolbar className={classes.toolbar}>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit"
                        onClick={handleClick} 
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to="./home" style={{color: "inherit", textDecoration: "none"}}>
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="./about" style={{color: "inherit", textDecoration: "none"}}>
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="./directory" style={{color: "inherit", textDecoration: "none"}}>
                                Directory
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="./favorites" style={{color: "inherit", textDecoration: "none"}}>
                                Favorites
                            </Link>
                        </MenuItem>                        
                        <MenuItem onClick={handleClose}>
                            <Link to="./contact" style={{color: "inherit", textDecoration: "none"}}>
                                Contact
                            </Link>
                        </MenuItem>                    
                    </Menu>
                    <Typography className={classes.title} variant="h6">
                        Menu
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </Container>
            </AppBar>
            </div>
        </Fragment>
    );
}

export default Header;