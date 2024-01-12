import "./App.css";
import { useEffect, useRef } from "react";

function Contact() {
  const contactSectionRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const contactSection = contactSectionRef.current;

    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75) {
        contactSection.classList.add("fade-in");
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="contact" className="contact-section" ref={contactSectionRef}>
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1
          className="display-1 text-uppercase text-white"
          style={{ WebkitTextStroke: "3px #dee2e6" }}
        >
          Contact
        </h1>
        <h1 className="position-absolute text-uppercase text-primary">
          CONTACT ME
        </h1>
      </div>
      <div className="container pt-4 pb-4 contact-form-container">
        <form>
          <div className="d-flex flex-column align-items-center">
            <div className="col-md-6 mb-4">
              <div className="form-group">
                <label htmlFor="name" className="text-primary">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-group ">
                <label htmlFor="email" className="text-primary">
                  Your Email *
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-group">
                <label htmlFor="tel" className="text-primary">
                  Your Contact Number *
                </label>
                <input
                  type="tel"
                  className="form-control rounded-pill"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-5   ">
              <div className="form-group">
                <label htmlFor="messages" className="text-primary">
                  Your Message *
                </label>
                <textarea
                  id="messages"
                  className="form-control"
                  required
                  rows={5}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-xl text-uppercase"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
