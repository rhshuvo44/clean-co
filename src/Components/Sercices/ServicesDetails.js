import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import servicesApi from "../../api/servicesApi";

const ServicesDetails = () => {
  const { id } = useParams();
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    servicesApi
      .get(`get-service/${id}`)
      .then((res) => setSingleService(res.data));
  }, [id]);
  const serviceOrder = () => {
    Navigate(`/service/${id}`);
  };
  return (
    <div className="card shadow-xl mt-16 border-2 w-96">
      <figure>
        <img src={singleService.image} alt={singleService.serviceName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleService.serviceName}</h2>
        <p>{singleService.price}</p>
        <p>{singleService.discretion}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={serviceOrder}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
