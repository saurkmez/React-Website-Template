import React, { useEffect, useState } from "react";
import Logo from "./a.svg";

function Splash() {
  const [splash, setSplash] = useState("splash");
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", (e) => {
      setTimeout(() => {
        setSplash("splashover");
      }, 3000);
    });
  });
  return (
    <div className={splash}>
      <h1 className="fade-in">
        <img src={Logo} className="splashlogo" alt="" />
      </h1>
    </div>
  );
}
export default Splash;
