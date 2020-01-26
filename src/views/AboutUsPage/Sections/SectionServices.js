import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We provide awesome service and support</h2>
          <h5 className={classes.description}>
          The program would be highly beneficial to international students as advice from high school and university 
          students who are studying in Auckland are provided.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Solve Problem"
            description={
              <span>
                <p>
                Our program aims to solve problems faced by individuals by providing useful tips for both 
                international students living abroad and students with parents in China.
                </p>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Encourage"
            description={
              <span>
                <p>
                Our program also encourages young international students to live confidently 
                and gain access to information they need to help them live conveniently aboard.
                </p>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Provide Necessary Information"
            description={
              <span>
                <p>
                We provide all necessary information for young students in China who are 
                interested to study abroad. The information will be available through our 
                hosted youth programs for students in both English and Chinese through meetings at schools, online audio (or video) calls and organized events. 
                </p>
              </span>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
