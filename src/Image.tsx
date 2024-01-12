interface ImageProps {
  src: string;
  alt: string;
  heading: string;
  text: string;
}

export const Image = ({ src, heading, alt, text }: ImageProps) => {
  return (
    <div
      id="home"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      data-carousel-init="true"
    >
      <div className="carousel-indicators"></div>

      <div className="carousel-inner rounded-5 shadow-4-strong">
        <div className="carousel-item active">
          <img src={src} className="d-block w-100" alt={alt} />
          <div className="carousel-caption d-none d-md-block">
            <h5>{heading}</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
