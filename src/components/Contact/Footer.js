import React from "react";
import Mail from "../AboutPage/Mail";
import Socialmedia from "../AboutPage/Socialmedia";

function Footer() {
  return (
    <div className="footer" style={{ color: "#ffb236" }} id="contact">
      <a href="https://github.com/saurkmez/AlperUrkmez-React" target="_blank">
        <span>Designed & Built by Alper Urkmez</span>
        <i class="fas fa-code-branch" style={{ marginLeft: "10px" }}></i>
      </a>

      <div className="superfixedthings">
        <div className="fixedthings">
          <Socialmedia />
          <Mail />
        </div>
      </div>
    </div>
  );
}
export default Footer;
