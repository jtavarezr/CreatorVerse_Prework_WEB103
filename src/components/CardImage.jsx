
function CardImage({ creator }) {
  return (
    <>
      <div
        className="card shadow-sm"
        style={{
          backgroundImage: `url(${creator.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{creator.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#!" className="btn btn-outline-light">
            Button
          </a>
        </div>
      </div>
    </>
  );
};




export default CardImage;
