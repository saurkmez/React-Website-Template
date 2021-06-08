import React from "react";
import Navbar from "./Navbar";
import Picture from "./Picture";
import Aboutme from "./Aboutme";

function About() {
  return (
    <div className="container" id="about">
      <Navbar />
      <Aboutme />
      <Picture />
    </div>
  );
}
export default About;
