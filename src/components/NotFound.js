import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className="page-error-container">
      <div className="title-wrapper">
        <h2 className="error-title">404 Error: Page&nbsp;Not&nbsp;Found</h2>

        {/* <h2 className="error-title">Page Not Found</h2> */}
      </div>
      <hr className="divider" />

      <div className="meaning-container">
        <h3>
          <span className="definition">404 Error</span>&nbsp;
          <span className="phonetics">
            [four-o-four air-were]
            <span className="shrug-emoji"> ¯\_(ツ)_/¯</span>
          </span>
        </h3>
        <h4 className="word-type">noun</h4>

        <ol className="definition-container">
          <li>
            A page that reveals itself due to HUMAN error *cough cough*.
            <p className="explanation">
              “The 404 error is the bain of a user’s web experience.”
            </p>
          </li>
          <li>Seriously, how did you get to this page?</li>
          <li>
            An error that results in panic, confusion, or utter annoyance.
            <p className="explanation">
              “A curious but naive Engineer who runs into a 404 error. Great.”
            </p>
          </li>
        </ol>
      </div>

      {props.userAuth ? (
        <Link to={ROUTES.DASHBOARD} className="route">
          <button className="return-dashboard">Return to Dashboard</button>
        </Link>
      ) : (
        <Link to={ROUTES.LANDING} className="route">
          <button className="return-home">Return to Homepage</button>
        </Link>
      )}
    </div>
  );
};

export default NotFound;
