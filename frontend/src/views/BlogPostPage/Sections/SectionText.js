import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            Our Mentoring Program
          </h3>
          <p>
            Students can talk about their problems or queries freely with any of our volunteers. 
            With this, we hope to provide International students with support and care to make up
            with the isolation from their families.
            <br />
            <br />
            As international students, we have the right to arrange our lives. 
            Some people go out and try the new things, while others prefer to stay 
            at home and play computer games. However, what we suggest you all to do 
            is to make the most of everyday and be a better self.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text={"\"To keep our society moving forward, we have a generational challenge -- to not only create new jobs, but create a renewed sense of purpose.\""}
            author="Mark ZuckerBerg"
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Exclusive Workshops and Events:</h3>
          <p>
            Students can share their life experiences and pass on both their life skills 
            and their living spirits. They can work together to create something valuable 
            and find out the new meaning of life.
          </p>
          <p>
            We provide exciting and encouraging presentations to international students at school. 
            Our aim is to build their confidence and help them have a positive attitude towards life.
          </p>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Don't wait. Sign up for our membership now!</h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}
