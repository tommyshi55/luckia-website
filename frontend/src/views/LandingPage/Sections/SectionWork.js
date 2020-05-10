import React from "react";
import axios from 'axios';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(workStyle);

function onSubmit(name, email, message) {
  axios.post('/api/work', {
    name: name,
    email: email,
    message: message
  });
}

export default function SectionWork() {
  const [status, setStatus] = React.useState("");

  // input fields
  const [name, setName] = React.useState({});
  const [email, setEmail] = React.useState({});
  const [message, setMessage] = React.useState({});

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
          If you would like to help international students and join this program, please fill out your information below. We will contact you shortly. 
          You can join us and help with the Curriculum, Communication and Design.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (event) => setName(event.target)
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (event) => setEmail(event.target)
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: (event) => setMessage(event.target)
                }}
              />
              <GridItem
                xs={12}
                sm={4}
                md={4}
                className={classes.mrAuto + " " + classes.mlAuto}
              >
                <p>{status}</p>
                <Button color="primary" onClick={() => {
                  onSubmit(name.value, email.value, message.value)
                  .then((res) => {
                    setStatus("Thank you for your interest. We will get back to you shortly.")
                    setTimeout(() => setStatus(""), 5000);
                    name.value = "";
                    email.value = "";
                    message.value = "";
                  });
                }}>
                Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
