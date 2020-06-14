import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

import cieLogo from "assets/img/cie-logo.png";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const padding = {
    paddingBottom: "32px"
}

const useStyles = makeStyles(style);

export default function SectionSponsor() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={padding}>Feature In</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <a href="https://www.cie.auckland.ac.nz/newsroom/international-student-support-venture-predicts-the-future-of-international-education/" target="_blank">
              <img src={cieLogo} alt="UoA Centre of Innovation and Entrepreneurship" />
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
