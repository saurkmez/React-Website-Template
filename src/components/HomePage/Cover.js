import React from "react";
import Button from "./Button";
import Coverletter from "./Coverletter";
import Splash from "./Splash";

function Cover() {
  return (
    <div className={"coverimage"} id="home">
      <div className="covercontainer">
        <div className="coverbox">
          <Splash />
          <Coverletter />
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Cover;
