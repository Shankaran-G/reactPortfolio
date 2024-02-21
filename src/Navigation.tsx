import { useState, useEffect } from "react";
import { Link, Events, animateScroll } from "react-scroll";
import "./App.css";

function Navigation() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});

    Events.scrollEvent.register("end", (to) => {
      setActiveLink(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">My</span>Portfolio
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <div className="section" id="home">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={300}
              offset={-80}
              className={`nav-item nav-link ${
                activeLink === "home" ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
              onSetActive={() => handleSetActive("home")}
            >
              Home
            </Link>
          </div>
          <div className="section" id="about">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={300}
              offset={-80}
              className={`nav-item nav-link ${
                activeLink === "about" ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
              onSetActive={() => handleSetActive("about")}
            >
              About
            </Link>
          </div>
          <div className="section" id="services">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={300}
              className={`nav-item nav-link ${
                activeLink === "services" ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
              onSetActive={() => handleSetActive("services")}
            >
              Service
            </Link>
          </div>
          <div className="section" id="portfolio">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={300}
              className={`nav-item nav-link ${
                activeLink === "portfolio" ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
              onSetActive={() => handleSetActive("portfolio")}
            >
              Blog
            </Link>
          </div>
        </div>
        <a
          href=""
          className="btn btn-outline-primary d-none d-lg-block"
          onClick={scrollToTop}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
