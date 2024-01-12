import { useState } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("*");

  const portfolioData = [
    { category: "first", image: "src/assets/web1.jpg" },
    { category: "first", image: "src/assets/web2.jpg" },
    { category: "first", image: "src/assets/web3.jpg" },
    { category: "first", image: "src/assets/web4.jpg" },
    { category: "first", image: "src/assets/web5.jpg" },
    { category: "first", image: "src/assets/web6.jpg" },
    { category: "second", image: "src/assets/app1.jpg" },
    { category: "second", image: "src/assets/app2.jpg" },
    { category: "second", image: "src/assets/app3.jpg" },
    { category: "second", image: "src/assets/app4.jpg" },
    { category: "second", image: "src/assets/app5.jpg" },
    { category: "second", image: "src/assets/app6.jpg" },
    { category: "third", image: "src/assets/ui1.jpg" },
    { category: "third", image: "src/assets/ui2.jpg" },
    { category: "third", image: "src/assets/ui3.jpg" },
    { category: "third", image: "src/assets/ui4.jpg" },
    { category: "third", image: "src/assets/ui5.jpg" },
    { category: "third", image: "src/assets/ui6.jpg" },
  ];

  const filteredImages = portfolioData.filter((item) => {
    if (activeCategory === "*") {
      return (
        portfolioData
          .filter((i) => i.category === item.category)
          .indexOf(item) < 2
      );
    } else {
      return activeCategory === item.category;
    }
  });

  return (
    <div className="container-fluid pt-4 pb-4" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
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
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${
                  activeCategory === "*" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("*")}
              >
                All
              </li>
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${
                  activeCategory === "first" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("first")}
              >
                Web
              </li>
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${
                  activeCategory === "second" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("second")}
              >
                App
              </li>
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${
                  activeCategory === "third" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("third")}
              >
                UI/UX
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-5 mb-4 portfolio-item ${item.category}`}
            >
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
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
