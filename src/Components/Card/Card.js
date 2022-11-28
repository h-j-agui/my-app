import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        {
          <img src="https://res.cloudinary.com/ddauluwus/image/upload/v1669393313/vintage_ogyz0n.png" />
        }
      </div>
      <div className="img-container">
        {
          <img src="https://res.cloudinary.com/ddauluwus/image/upload/v1669392737/waves_ag738p.png" />
        }
      </div>
      <div className="img-container">
        {
          <img src="https://res.cloudinary.com/ddauluwus/image/upload/v1669392947/dogs_cfs4ml.png" />
        }
      </div>
    </div>
  );
};

export default Card;
