import { Link } from "react-scroll";
import Logo from "../HomePage/a.svg";

function Navbar() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={Logo}
          className="navbarlogo"
          alt=""
          onClick={refreshPage}
          style={{ cursor: "pointer" }}
        ></img>
      </div>

      <ul style={{ margin: "0" }}>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="jobs"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="contact1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
