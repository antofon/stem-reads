import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div>
      <h2 className="error-title">404 Error:</h2>

      <h2>Page Not Found</h2>
      <hr className="divider" />

      <div className="definition">
        <h3>
          404 Error&nbsp;
          <span className="phonetics">
            [four-o-four air-were]
            <span class="shrug-emoji"> ¯\_(ツ)_/¯</span>
          </span>
        </h3>
        <h4 class="word-type">noun</h4>

        <ol>
          <li>
            A page that reveals itself due to HUMAN error *cough cough*
            <li>“The 404 error is the bain of a user’s web experience.”</li>
          </li>
          <li>Seriously, how did you get to this page?</li>
          <li>
            An error that results in panic, confusion, or utter annoyance.
            <li>
              “A curious but naive Engineer who runs into a 404 error. Great.”
            </li>
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
