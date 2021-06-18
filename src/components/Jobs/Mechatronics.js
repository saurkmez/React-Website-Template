import React from "react";

function Mechatronics() {
  return (
    <div className="frontend">
      <h2 style={{ color: "#ffb236" }}>Mechatronics Engineer</h2>
      <h3>
        Envest Enerji ve Su Teknolojileri
        <br />
        (September 2019 – Present)
      </h3>
      <ul>
        <li>
          <p style={{ color: "#ffb236", marginBottom: "0", listStyle: "none" }}>
            PLC Programming
          </p>{" "}
          <br /> Developing automation projects for water management systems.
          These projects are actively used in SCADA departments of Water and
          Sewage Administrations of major cities of Turkey such as over 1000
          stations.
          <br />
          Tools used: Omron CX-Programmer, Sysmac Studio, GMT Soft and GMT Suite
        </li>

        <li>
          <p style={{ color: "#ffb236", marginBottom: "0", listStyle: "none" }}>
            HMI Programming
          </p>{" "}
          <br /> Controlling and monitoring the control panels for water
          management systems using HMI Panels.
          <br />
          Tools used: Kinco HMI Software, Beijer iX Developer, GMT HMI Software,
          ENDA HMI Software and Omron HMI Software.
        </li>
      </ul>
    </div>
  );
}
export default Mechatronics;
