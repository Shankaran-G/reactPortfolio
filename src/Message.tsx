import { useState } from "react";
import { Link } from "react-scroll";
import { Modal, Button, Form } from "react-bootstrap";

function Message() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

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
      <div className="collapse  navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav  ms-auto py-0  ">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-item nav-link"
            style={{ cursor: "pointer" }}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-item nav-link"
            style={{ cursor: "pointer" }}
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="nav-item nav-link"
            style={{ cursor: "pointer" }}
          >
            Service
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="nav-item nav-link"
            style={{ cursor: "pointer" }}
          >
            Blog
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-item nav-link"
            style={{ cursor: "pointer" }}
          >
            Contact
          </Link>
        </div>
        <Button
          variant="outline-primary"
          className="d-none d-lg-block"
          onClick={handleModal}
        >
          Hire Me
        </Button>
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
    </nav>
  );
}

export default Message;
