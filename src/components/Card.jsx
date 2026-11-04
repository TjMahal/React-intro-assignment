function Card({ title, description, image, alt, buttonText, buttonLink }) {
  return (
    <div className="d-flex flex-column h-100">
      <img
        src={image}
        alt={alt}
        className="w-100 rounded-4"
        style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
        loading="lazy"
      />

      <div className="pt-4 pb-4 d-flex flex-column flex-grow-1">
        <h5 className="fw-semibold mb-1">{title}</h5>
        <p className="mb-0">{description}</p>

        {buttonText && (
          <a href={buttonLink} className="btn btn-dark rounded-pill align-self-start mt-3">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;