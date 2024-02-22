const Blog = () => {
  const portfolioData = [
    { category: "first", image: "./images/web1.png" },
    { category: "first", image: "./images/web2.png" },
    { category: "first", image: "./images/myra1.jpg" },
    { category: "first", image: "./images/myra2.jpg" },
  ];

  return (
    <div className="container-fluid page-content dark pt-4 pb-4" id="portfolio">
      <div className="container">
        <div
          className="position-relative d-flex align-items-center justify-content-center"
          style={{ marginTop: "50px" }}
        >
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "3px #dee2e6" }}
          >
            Gallery
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Portfolio
          </h1>
        </div>
        <div className="row portfolio-container">
          {portfolioData.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4 portfolio-item">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100 portfolio-image"
                  src={item.image}
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href={item.image} data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
