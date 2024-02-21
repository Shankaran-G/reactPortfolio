import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function About() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1GlQ1a2_KdEtZ5gO3nAeB_wOfHEsD4OjZ/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <div className={`page-content ${isVisible ? "dark" : ""}`} id="about">
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
            <h2 className="mb-4">Personal Portfolio</h2>
            <p>
              As a young and motivated individual. Eager to bring my fresh
              perspective and learning techniques to solve real-world problems
              in IT filed.
            </p>
            <div className="row mb-3">
              <div className="col-sm-7 py-3">
                <h5>
                  Name:{" "}
                  <span className="text-secondary">Shankaran Giritharan</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Birthday: <span className="text-secondary">10 NOV 2000</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Degree: <span className="text-secondary">BICT</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Experience: <span className="text-secondary">Fresher</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Phone: <span className="text-secondary">+94776103561</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Email:{" "}
                  <span className="text-secondary">skshankaran4@gmail.com</span>
                </h5>
              </div>
              <div className="col-sm-7 py-3">
                <h5>
                  Address:{" "}
                  <span className="text-secondary">Colombo, Sri Lanka</span>
                </h5>
              </div>
            </div>
            <button
              style={{ marginRight: "50px", color: "white" }}
              className="btn btn-outline-primary"
              onClick={handleModal}
            >
              Hire Me
            </button>
            <a
              href="#"
              className="btn btn-outline-primary"
              onClick={handleDownloadCV}
              style={{ color: "white" }}
            >
              Get CV
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
            <div className="col-lg-5">
              <img
                src="./src/assets/hire.jpg"
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
                    name="from_name"
                    placeholder="Enter your full name"
                  />
                </Form.Group>
                <Form.Group controlId="contact">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    placeholder="Enter your Contact Number"
                  />
                </Form.Group>

                <Form.Group controlId="from_email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="from_email"
                    placeholder="Enter your email address"
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
    </div>
  );
}

export default About;
