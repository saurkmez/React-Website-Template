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
        Hello ! I am Alper, front-end developer and digital experiences creator. I have a continuous passionate for products created online, designing them with my point of view and adding my imagination feels like art to me. 
        </p>
        <p>
        My story started in 2020, when I discovered my interest in web site development and online products and turns out when you embrace an occupation this much it becomes your professional one. As for today, I completed various projects and looking forward to thrive continuosly.
        </p>
        <p>Please see technologies I've been working with currently:</p>
        <div className="skillscontainer">
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vue.js</li>
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
