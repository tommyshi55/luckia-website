import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
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
import jennyPic from "assets/img/faces/jenny.jpg";
import darienPic from "assets/img/faces/darien.jpg";
import cynthiaPic from "assets/img/faces/cynthia.jpg";
import lucyPic from "assets/img/faces/lucy.jpg";

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
                      Always have passion to build a brighter future for others and take actions from today.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <a href="https://www.linkedin.com/in/tommy-shi-ba6a79121/">
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
                      <img src={lucyPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${lucyPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Lucy Shi</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>SECRETARY</h6>
                    </Muted>
                    <p className={classes.description}>
                      A little progress each day adds up to big results.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>                    
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
                      <h6 className={classes.cardCategory}>SENIOR SOFTWARE ENGINEER AND LEAD</h6>
                    </Muted>
                    <p className={classes.description}>
                      Technology is the best when it brings all people together.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <a href="https://www.linkedin.com/in/tommy-shi-ba6a79121/">
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
                      <img src={cynthiaPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cynthiaPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Cynthia Cai</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>PROJECT DIRECTOR(COMMUNICATION AND MARKETING)</h6>
                    </Muted>
                    <p className={classes.description}>
                      Why be normal when you can be everything and anything else?
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
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
                      <img src={jennyPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${jennyPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Jenny Jiang</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>EVENT DIRECTOR(COMMUNICATION)</h6>
                    </Muted>
                    <p className={classes.description}>
                      The art of communication is the language of leadership.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
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
                      <img src={darienPic} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${darienPic})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Darien Tan</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>SOFTWARE DEVELOPER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Fail to plan = plan to fail.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
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
