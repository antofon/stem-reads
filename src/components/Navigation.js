import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </li>
    <li>
      <Link to={ROUTES.LOG_IN}>Log in</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </li>
    <li>
      <Link to={ROUTES.LOG_IN}>Log in</Link>
    </li>
    <li>
      <Link to={ROUTES.COLLECTIONS}>
        <p className="preview-collection-wrapper">
          <button className="preview-collection">Preview Collection</button>
        </p>
      </Link>
    </li>
  </ul>
);

export default Navigation;
