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
          <div className="contactheader">What’s Next?</div>
          <div className="contactmessage">
            <h1 style={{ color: "#ffb236" }}>Get In Touch</h1>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
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
