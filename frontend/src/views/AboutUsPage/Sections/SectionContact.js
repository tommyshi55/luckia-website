import React from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

async function onSubmit(name, email, select) {
  var message = "";
  switch(select) {
    case "1":
      message = "I want to be a program coordinator";
      break;
    case "2":
      message = "I want to be a developer";
      break;
    case "3":
      message = "I want to be a event volunteer";
      break;
    default:
      message = "WEBSITE: NO SPECIALITY. PLEASE CONFIRM WITH THE SENDER";
  }

  await axios.post('/api/work', {
    name: name,
    email: email,
    message: message
  });
}

export default function SectionContact() {
  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = event => {
    setSpecialitySelect(event.target.value);
  };

  const [status, setStatus] = React.useState("");

  // input fields
  const [name, setName] = React.useState({});
  const [email, setEmail] = React.useState({});

  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            Want to work with us?
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            If you would like to help international students and join this program, please fill out your information below. We will contact you shortly. 
            You can join us and help with the Curriculum, Communication and Design.
          </h4>
          <form>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (event) => setName(event.target)
                  }}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (event) => setEmail(event.target)
                  }}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={specialitySelect}
                    onChange={handleSpeciality}
                    inputProps={{
                      name: "specialitySelect",
                      id: "speciality-select"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      Speciality
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="1"
                    >
                      I{"'"}m a Program Coordinator
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      I{"'"}m a Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      I{"'"}m a Event Volunteer
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem
                md={4}
                sm={4}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <p>{status}</p>
                <Button color="primary" round onClick={() => {
                  onSubmit(name.value, email.value, specialitySelect)
                  .then((res) => {
                    setStatus("Thank you for your interest. We will get back to you shortly.")
                    setTimeout(() => setStatus(""), 5000);
                    name.value = "";
                    email.value = "";
                  })
                  .catch((err) => {
                    setStatus("Server error, please contact our team through email.")
                    setTimeout(() => setStatus(""), 8000);
                    name.value = "";
                    email.value = "";
                  });
                }}>
                  Let{"'"}s talk
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
