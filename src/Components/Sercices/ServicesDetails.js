import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import servicesApi from "../../api/servicesApi";

const ServicesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    servicesApi
      .get(`get-service/${id}`)
      .then((res) => setSingleService(res.data));
  }, [id]);
  const serviceOrder = () => {
    navigate(`/serviceOrder/${singleService._id}`);
  };
  return (
    <>
      <div className="hero min-h-screen  mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={singleService.image}
            alt={singleService.serviceName}
            className="max-w-lg"
          />
          <div className="px-10">
            <h1 className="text-5xl font-bold">{singleService.serviceName}</h1>
            <h1 className="text-2xl font-bold mt-3">$ {singleService.price}</h1>
            <p className="py-6">{singleService.discretion}</p>
            <button className="btn btn-primary" onClick={serviceOrder}>
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
