import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./App.css";

function Message() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (form) {
      const fromName = form.elements.namedItem("from_name") as HTMLInputElement;
      const contact = form.elements.namedItem("contact") as HTMLInputElement;
      const fromEmail = form.elements.namedItem(
        "from_email"
      ) as HTMLInputElement;
      const message = form.elements.namedItem("message") as HTMLInputElement;

      if (
        !fromName.value ||
        !contact.value ||
        !fromEmail.value ||
        !message.value
      ) {
        setShowFailure(true);
        setTimeout(() => {
          setShowFailure(false);
        }, 5000);
        return;
      }
      emailjs
        .sendForm("service_jnxwc1w", "template_m3a51bl", form, {
          publicKey: "pSlZLc_xtCj6Cpjnn",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              form.reset();
            }, 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setShowFailure(true);
            setTimeout(() => {
              setShowFailure(false);
              form.reset();
            }, 5000);
          }
        );
    }
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-dark fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">My</span>Portfolio
        </h1>
      </a>
      <Button
        onClick={toggleNav}
        className="navbar-toggler"
        type="button"
        aria-controls="navbarCollapse"
        aria-expanded={showNav ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        {" "}
        <span className="navbar-toggler-icon"></span>
      </Button>
      <div
        className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto py-0">
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
        </div>
        <Button
          variant="outline-primary"
          className="d-none d-lg-block"
          onClick={handleModal}
          style={{ color: "white" }}
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
            <div className="col-lg-5">
              <img
                src="./public/images/hire.jpg"
                alt="Your Photo"
                className="img-fluid rounded-circle"
              />
            </div>

            <div className="col-lg-6">
              <Form ref={formRef} onSubmit={sendEmail}>
                <Form.Group controlId="from_name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="from_name"
                  />
                </Form.Group>

                <Form.Group controlId="contact">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your contact number"
                    name="contact"
                  />
                </Form.Group>

                <Form.Group controlId="from_email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    name="from_email"
                  />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Additional Information</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
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
      {showSuccess && (
        <div className="success-message">
          <p>Email sent successfully!</p>
          <div className="progress-bar">
            <div className="progress-bar-fill"></div>
          </div>
        </div>
      )}
      {showFailure && (
        <div className="failure-message">
          <p>Failed to send email. Please try again later.</p>
          <div className="progress-bar">
            <div className="progress-bar-fill"></div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Message;
