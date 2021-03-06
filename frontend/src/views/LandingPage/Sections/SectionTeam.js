import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";
import Button from "components/CustomButtons/Button.js";

import tommyPic from "assets/img/faces/tommy.jpg";
import lexiePic from "assets/img/faces/lexie.jpg";
import raymondPic from "assets/img/faces/raymond.JPG";
import hongchangPic from "assets/img/faces/hongchang.JPG";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={lexiePic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${lexiePic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Lexie Qiao</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>FOUNDER AND CEO</h6>
                    </Muted>
                    <p className={classes.description}>
                      Lexie Qiao is a final year Education and Social work student at the University of Auckland. 
                      Lexie has been the vice president in ESSA (Education and Social Work Student Association) in 2019 and her work is recognised in the highest accolade for tertiary education - Blues Award 2019 for Service and Leadership.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <a href="https://www.linkedin.com/in/lexie-qiao-2b1335143/" target="_blank">
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                    </a>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={tommyPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${tommyPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Tommy Shi</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>HEAD OF TECHNOLOGY</h6>
                    </Muted>
                    <p className={classes.description}>
                      Tommy is a software engineering student at the University of Auckland. 
                      He is one of the top-performing students and has been placed on the Dean’s Honour List several times. 
                      He believes that students need to take responsibilities of themselves early in their lives.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <a href="https://www.linkedin.com/in/tommy-shi-ba6a79121/" target="_blank">
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                    </a>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={raymondPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${raymondPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Xizhe Lin</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>DATA ANALYST</h6>
                    </Muted>
                    <p className={classes.description}>
                      Xizhe is a geographical information science and computer science student at the University of Auckland. 
                      He is currently focusing on spatial planning and data analysis. He likes exploring the world through his cameras and maps.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <a href="https://www.linkedin.com/in/xizhe-lin-715349166/" target="_blank">
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                    </a>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={hongchangPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${hongchangPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Hongchang Zhang</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>PROGRAM COORDINATOR</h6>
                    </Muted>
                    <p className={classes.description}>
                      Hongchang is a master student in civil engineering and preparing to graduate.
                      Despite his engineering background, he is very interested in networking and education.
                      In his spare time, he enjoys exercising and reading.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <a href="https://www.linkedin.com/in/hongchang-zhang-253002184/" target="_blank">
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                    </a>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
