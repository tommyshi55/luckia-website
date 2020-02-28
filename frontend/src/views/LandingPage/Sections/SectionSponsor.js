import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

import byronPic from "assets/img/byron.png";
import churchPic from "assets/img/church.png";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function SectionSponsor() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Sponsors</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <a href="https://www.byron2005.com/">
              <img src={byronPic} alt="Byron International" />
            </a>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <a href="https://adventist.org.nz/">
              <img src={churchPic} alt="Auckland Seventh Day Adventist Church" />
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
