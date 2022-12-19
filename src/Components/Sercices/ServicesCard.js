import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, serviceName, image, price, discretion } = service;
  const navigate = useNavigate();
  const handleServiceDetail = () => {
    navigate(`/service/${_id}`);
  };
  return (
    <div className="card shadow-xl border-2 w-96">
      <figure>
        <img src={image} alt={serviceName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{price}</p>
        <p>{discretion}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleServiceDetail}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
