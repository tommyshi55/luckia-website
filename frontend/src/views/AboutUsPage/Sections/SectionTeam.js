import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import tommyPic from "assets/img/faces/tommy.jpg";
import lexiePic from "assets/img/faces/lexie.jpg";
import raymondPic from "assets/img/faces/raymond.JPG";
import hongchangPic from "assets/img/faces/hongchang.JPG";

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We are superstars</h2>
          <h5 className={classes.description}>
            We have a diverse team who looks after every student who needs help.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={lexiePic} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Lexie Qiao</h4>
              <h6 className={classes.textMuted}>FOUNDER AND CEO</h6>
              <p className={classes.cardDescription}>
                Always have passion to build a brighter future for others and take actions from today.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <a href="https://www.linkedin.com/in/lexie-qiao-2b1335143/">
                <Button justIcon simple color="linkedin">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={tommyPic}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Tommy Shi</h4>
              <h6 className={classes.textMuted}>HEAD OF TECHNOLOGY</h6>
              <p className={classes.cardDescription}>
                Technology is the best when it brings all people together.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <a href="https://www.linkedin.com/in/tommy-shi-ba6a79121/">
                <Button justIcon simple color="linkedin">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={raymondPic} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Xizhe Lin</h4>
              <h6 className={classes.textMuted}>DATA ANALYST</h6>
              <p className={classes.cardDescription}>
                Hello world!
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <a href="https://www.linkedin.com/in/xizhe-lin-715349166/">
                <Button justIcon simple color="linkedin">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={hongchangPic} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Hongchang Zhang</h4>
              <h6 className={classes.textMuted}>PROGRAM COORDINATOR</h6>
              <p className={classes.cardDescription}>
                Make the best use of every day.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <a href="https://www.linkedin.com/in/hongchang-zhang-253002184/">
                <Button justIcon simple color="linkedin">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
