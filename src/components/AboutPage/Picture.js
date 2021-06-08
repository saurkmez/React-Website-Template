import React, { useEffect } from "react";
import aa from "./aa.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Picture() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="pictureAlper">
      <img
        src={aa}
        alt="Alper"
        style={{ borderRadius: 10 }}
        data-aos="fade-down"
      />
    </div>
  );
}
export default Picture;
