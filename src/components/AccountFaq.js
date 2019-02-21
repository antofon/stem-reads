import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const AccountFaq = () => {
  return (
    <div className="faq-explanation-wrapper">
      <h2 className="faq-title">Account FAQ</h2>

      <div className="faq-explanation-body">
        <p className="faq-explanation">
          Creating an account allows you to maintain real-time records of your
          books and other account information. Your user credentials are solely
          used for getting started and logging into the app.
        </p>

        <p className="faq-explanation">
          You can even create a new email that is not connected to your primary
          email address!
        </p>
      </div>

      <Link to={ROUTES.LANDING} className="route">
        <button className="return-home">Return to Homepage</button>
      </Link>
    </div>
  );
};

export default AccountFaq;
