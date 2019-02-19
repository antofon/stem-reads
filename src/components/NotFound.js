import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className="page-error-container">
      <div className="title-wrapper">
        <h2 className="error-title">404 Error:</h2>

        <h2 className="error-title">Page Not Found</h2>
      </div>
      <hr className="divider" />

      <div className="meaning-container">
        <h3>
          <span className="definition">404 Error</span>&nbsp;
          <span className="phonetics">
            [four-o-four air-were]
            <span class="shrug-emoji"> ¯\_(ツ)_/¯</span>
          </span>
        </h3>
        <h4 class="word-type">noun</h4>

        <ol className="definition-container">
          <li>
            A page that reveals itself due to HUMAN error *cough cough*
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
        <p className="">
          <Link to={ROUTES.DASHBOARD}>
            <button className="preview-collection">Return to Dashboard</button>
          </Link>
        </p>
      ) : (
        <p className="">
          <Link to={ROUTES.LANDING}>
            <button className="preview-collection">Return to Home</button>
          </Link>
        </p>
      )}
    </div>
  );
};

export default NotFound;
