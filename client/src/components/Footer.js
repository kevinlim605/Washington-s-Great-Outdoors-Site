import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Row, Col } from "reactstrap";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles({
    icon: {
        color: "white",
        paddingRight: "5px", 
    }
})

function Footer() {

    const classes = useStyles();

    return(
        <div className="site-footer fixed-bottom">
            <Container>
                <Row>
                    <Col className="text-center">
                        <a href="https://instagram.com"><InstagramIcon fontSize="large" className={classes.icon}/></a>
                        <a href="https://facebook.com"><FacebookIcon fontSize="large" className={classes.icon}/></a>
                        <a href="https://twitter.com"><TwitterIcon fontSize="large" className={classes.icon}/></a>
                        <a href="https://youtube.com"><YouTubeIcon fontSize="large" className={classes.icon}/></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;