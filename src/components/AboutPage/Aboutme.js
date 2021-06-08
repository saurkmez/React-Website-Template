import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="muhtesemAlper " data-aos="fade-down">
      <div className="textBox">
        <div className="aboutmeheader">
          <h2>
            <span style={{ color: "#ffb236" }}>About Me</span>
          </h2>
        </div>

        <p>
          Hello! My name is Alper and I enjoy  things that live on the
          internet. My interest in web development started back in 2020 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I've had the privilege of working at an
          advertising agency, a start-up, a huge corporation. My main focus
          these days is building accessible, inclusive products and digital
          experiences at Upstatement for a variety of clients. Here are a few
          technologies I've been working with recently:
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <div className="skillscontainer">
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vue</li>
            <li>MySQL</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
