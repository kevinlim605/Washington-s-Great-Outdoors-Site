import React, { Fragment, useState } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import { SidebarData } from "../shared/sidebarData";
import SubMenu from './SubMenu';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  color: white;
  margin-left: 21px;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

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

    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
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
                        <MenuIcon onClick={showSidebar}/>
                    </IconButton>
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon to="#">
                                <MenuIcon onClick={showSidebar} />
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return (
                                    <div onClick={showSidebar}>
                                        <SubMenu item={item} key={index} />
                                    </div>
                                )
                            })}
                        </SidebarWrap>
                    </SidebarNav>
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