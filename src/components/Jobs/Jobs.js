import React, { useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Frontend from "./Frontend";
import Mechatronics from "./Mechatronics";
import Intern from "./Intern";
import Aos from "aos";
import "aos/dist/aos.css";

function Jobs() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="jobs" id="jobs">
      <HashRouter hashType="slash">
        <div className="jobscontainer" data-aos="fade-down">
          <div className="jobsheader">
            <h1 style={{ margin: 0, color: "#ffb236" }}>Where I’ve Worked</h1>
          </div>

          <div className="jobscompany">
            <div className="companies">
              <ul>
                <li className="route">
                  <NavLink
                    to="/"
                    className="route"
                    activeClassName="routete"
                    exact
                  >
                    {" "}
                    <div>
                      <h4 style={{ color: "#ffb236" }}>
                        Jr.Front-End Developer
                      </h4>
                      <p>Envest Enerji ve Su Teknolojileri</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Automation"
                    className="route"
                    activeClassName="routete"
                  >
                    {" "}
                    <div>
                      <h4 style={{ color: "#ffb236" }}>Automation Engineer</h4>
                      <p>Envest Enerji ve Su Teknolojileri</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Intern"
                    className="route"
                    activeClassName="routete"
                  >
                    {" "}
                    <div>
                      <h4 style={{ color: "#ffb236" }}>Engineering Intern</h4>
                      <p>Envest Enerji ve Su Teknolojileri</p>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="jobsdescription">
            <div className="jobsdescriptioninner">
              <Switch>
                <Route path="/" exact component={Frontend} />
                <Route path="/Automation" component={Mechatronics} />
                <Route path="/Intern" component={Intern} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}
export default Jobs;
