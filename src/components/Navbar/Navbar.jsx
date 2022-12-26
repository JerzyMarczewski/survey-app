import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/create-survey">Create survey</Link>
      </button>
    </div>
  );
};
