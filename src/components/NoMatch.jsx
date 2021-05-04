import React from "react";
import notFound from "../assets/404.gif";

const NoMatch = () => (
  <div className="heading-center">
    <p>404: Cats not found! 🙀</p>
    <img src={notFound} />
  </div>
);

export default NoMatch;
