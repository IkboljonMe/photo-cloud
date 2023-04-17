import React from "react";

const Card = ({ imgUrl }) => {
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="imaged" />
      </div>
    </div>
  );
};

export default Card;
