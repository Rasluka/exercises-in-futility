import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>

      <Link to="/login">Sign In</Link>
    </>
  );
};

export default Home;