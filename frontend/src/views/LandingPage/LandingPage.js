/*eslint-disable*/ import React from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";
import SectionSponsor from "./Sections/SectionSponsor.js";
import SectionFeature from "./Sections/SectionFeature.js";
import SectionTestimonial from "./Sections/SectionTestimonial.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Luckia Student Help"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg8.jpg")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Welcome to Luckia Student Help</h1>
              <h4>
              Luckia Student Help is a program designed by youths to 
              promote mental health by providing workshops for international 
              students living abroad. Luckia also hosts youth programs for students 
              in many languages for the purpose of applying inclusive practice and connecting all students.
              </h4>
              <br />
              <Link to="/about">
                <Button
                  color="danger"
                  size="lg"
                  target="_blank"
                >
                  About Us
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionFeature />
          <SectionTeam />
          <SectionTestimonial />
          <SectionSponsor />
          <SectionWork />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.facebook.com/Luckia.nz/"
                    target="_blank"
                    className={classes.block}
                  >
                    Facebook
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.instagram.com/luckiastudenthelp/?hl=en"
                    target="_blank"
                    className={classes.block}
                  >
                    Instagram
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="https://www.linkedin.com/company/luckia-student-help/" className={classes.block}>
                    LinkedIn
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className={classes.block}
                  >
                    WeChat Official
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              Luckia Student Help
            </div>
          </div>
        }
      />
    </div>
  );
}
