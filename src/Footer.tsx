function Footer() {
  return (
    <footer className="bg-primary text-center text-white py-3">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/profile.php?id=100092372490244&mibextid=ZbWKwL"
            role="button"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/imshankaran?igsh=MTluNTZlbGZlaXB4Mg=="
            role="button"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/shankaran-giritharan-31029a273"
            role="button"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/Shankaran-G"
            role="button"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
