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

import cynthia from "assets/img/faces/cynthia.JPG";
import generic from "assets/img/faces/generic.png";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
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
                        <img src={cynthia} alt="..." />
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
                        <img src={generic} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}Trust the programme and ask what you want to ask.
                        <br />
                        My mentor not only told me what I want to know about the University life and also taught me how to contact with the Uni when I have further questions
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Ivy Wang</h4>
                      <Muted>
                        <h6>PARTICIPANT OF THE MENTORING PROGRAM</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={generic} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}The most critical thing is you have to prepare for the meeting in advance 
                        so that you know what you want to know and make sure not losing your points during the meeting.
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Fiona Qi</h4>
                      <Muted>
                        <h6>PARTICIPANT OF THE MENTORING PROGRAM</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={generic} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}The online meeting is not about teaching. It's more like you talk with one of your friends. 
                        That is important to me since I feel more comfortable during the meeting.
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Laura Guo</h4>
                      <Muted>
                        <h6>PARTICIPANT OF THE MENTORING PROGRAM</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={generic} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}If you want to learn something such as social skills and how to manage your timetable, apply for the programme, which is free!
                        <br />
                        You not only teach your mentee but learn from them
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Linda Yan</h4>
                      <Muted>
                        <h6>MENTOR OF THE MENTORING PROGRAM</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={generic} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}I learned a lot how the younger generation thinks
                        <br />
                        Helping others and receiving good feedback is much joy for me, and I also learned a lot from my mentees.
                        {'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>JJ Liu</h4>
                      <Muted>
                        <h6>MENTOR OF THE MENTORING PROGRAM</h6>
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
