import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./App.css";

function About() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerClass = `container-fluid py-5 ${isVisible ? "fadeIn" : ""}`;

  return (
    <div className={containerClass} id="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "3px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            About Me
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img
              className="img-fluid rounded w-100"
              src="./src/assets/sj.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <h2 className="mb-4">UI/UX Designer & Web Developer</h2>
            <p>
              Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
              amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
              sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet
              lorem diam dolor justo et dolor dolor dolor
            </p>
            <div className="row mb-3">
              <div className="col-sm-7 py-3">
                <h5>
                  Name: <span className="text-secondary">The Wolverine</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Birthday: <span className="text-secondary">1 JAN 2000</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Degree: <span className="text-secondary">BICT</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Experience: <span className="text-secondary">10 Years</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Phone: <span className="text-secondary">+012 345 6789</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Email:{" "}
                  <span className="text-secondary">killer@example.com</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Address:{" "}
                  <span className="text-secondary">
                    123 Street, Colombo, SriLanka
                  </span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Freelance: <span className="text-secondary">Available</span>
                </h5>
              </div>
            </div>
            <button
              style={{ marginRight: "50px" }}
              className="btn btn-outline-primary"
              onClick={handleModal}
            >
              Hire Me
            </button>
            <a href="" className="btn btn-outline-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto", marginRight: "10px" }}>
            Hire Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f2f2f2" }}>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="./src/assets/hire.jpg"
                alt="Your Photo"
                className="img-fluid rounded-circle"
              />
            </div>

            <div className="col-lg-6">
              <Form>
                <Form.Group controlId="fullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group controlId="contactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your contact number"
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>

                <Form.Group controlId="additionalInfo">
                  <Form.Label>Additional Information</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Provide additional information about your project"
                  />
                </Form.Group>
                <div className="mb-3"></div>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default About;
