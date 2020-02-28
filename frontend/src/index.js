import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "./assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "./views/BlogPostPage/BlogPostPage.js";
import ContactUsPage from "./views/ContactUsPage/ContactUsPage.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import SignupPage from "./views/SignupPage/SignupPage.js";
import ErrorPage from "./views/ErrorPage/ErrorPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutUsPage} />
      <Route path="/service" component={BlogPostPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/sign-up" component={SignupPage} />
      <Route path="/error" component={ErrorPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
