import "./App.css";

interface ServiceProps {
  services: { name: string; text: string }[];
}

export const Service: React.FC<ServiceProps> = ({ services }) => {
  return (
    <section id="services">
      <div className="container-fluid page-content dark py-5">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "3px #dee2e6" }}
          >
            Service
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Services
          </h1>
        </div>
        <div className="row py-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 mt-4">
              <div className="card servicesText">
                <div className="card-body">
                  <i className="fas servicesIcon fa-clock"></i>
                  <h4 className="card-title mt-4">{service.name}</h4>
                  <p className="card-text mt-3">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
