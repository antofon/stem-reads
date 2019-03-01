import React from "react";
import { matchPath } from "react-router";

const Header = props => {
  // want to return match with data or no match
  const match = !matchPath(props.pathname, {
    path: "/",
    exact: true,
    strict: false
  });
  return (
    <div className="header-wrapper">
      <h1>
        <span className="stem-copy">Stem</span>
        <span className="reads-copy">reads</span>
      </h1>
      {/* want to show/hide sub copy based on if user is logged in our out and there is not a match or paths */}
      {(props.userAuth || !props.userAuth) && match ? null : (
        <p>
          Explore illustrated and non-fictional books about past and present
          pioneers in&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics"
            title="Science, Technology, Engineering, Mathematics"
            target="_blank"
            rel="noopener noreferrer"
          >
            STEM
          </a>
          .
        </p>
      )}
    </div>
  );
};

export default Header;
