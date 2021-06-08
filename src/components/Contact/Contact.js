import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="contact1">
      <div className="contact">
        <div className="contactcontainer" data-aos="fade-down">
          <div className="contactheader"></div>
          <div className="contactmessage">
            <h1 style={{ color: "#ffb236" }}>Contact Me</h1>
            I am always open for new ideas and opportunities. Feel free to contact me through my e-mail or my LinkedIn profile, in case you have a project to disguss, have a question about me or just to meet a fellow developer !
          </div>
          <button
            className="buttonsubmit"
            style={{ color: "#ffb236" }}
            data-aos="fade-right"
          >
            <a href="mailto:saurkmez@gmail.com">Say Hello</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
