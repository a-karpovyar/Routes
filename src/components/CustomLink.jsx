import { Link, useMatch } from "react-router-dom";

import React from "react";

const CustomLink = ({ children, to }) => {
  const match = useMatch(to);
  return (
    <Link to={to} style={{ color: match ? "gold" : 'white' }}>
      {children}
    </Link>
  );
};

export { CustomLink };
