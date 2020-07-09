import React from "react";

// react component for creating beautiful carousel
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Muted from "components/Typography/Muted.js";

import "../../../assets/css/carousel.css";
import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.js";

import hongchang from "assets/img/faces/hongchang.JPG";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      <div
        className={
          classes.testimonials +
          " " +
          classes.testimonial2
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our Students Love Us</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={hongchang} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}My experience being part of the Luckia team has been a wonderful ride as this team have some amazing people that are strongly bonded together. 
                        There were ups and downs throughout the times I’ve been in Luckia as sometimes some things just doesn’t go as expected. But what was most important was we never ever let that bring us down, 
                        we just learn from it and give it our 110% to make it better the next time round. Funnily enough, we always achieve our goal even though it takes time to build it up, 
                        which is why the Luckia team is such a strong family. For future Luckia teammates and members, 
                        I really recommend you to work with Luckia as these people truely care for your wellbeing and will support through your ups and downs no matter what.
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Cynthia Cai</h4>
                      <Muted>
                        <h6>EX LUCKIA STUDENT HELP TEAM MEMBER</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={hongchang} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}Thank you Anna for the invite thank you to the
                        whole Vogue team Called I Miss the Old Kanye At the God
                        {"'"}s last game Chop up the soul Kanye. I promise I
                        will never let the people down. I want a better life for
                        all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the
                        invite thank you to the whole Vogue team.{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Christian Louboutin</h4>
                      <Muted>
                        <h6>Designer @ Louboutin & Co.</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
