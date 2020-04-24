import React from "react";
import {Link} from "react-router-dom";

/**
 * @description  It is shown every time there is a different route to those that are explicit
 */
const NotFound = () => (
  <div>
    <h1 className="not-found-title">
      These are not the books you are looking for...
    </h1>
    <div className="home-link">
      <Link to="/">Return home and try again</Link>
    </div>
  </div>
);

export default NotFound;
