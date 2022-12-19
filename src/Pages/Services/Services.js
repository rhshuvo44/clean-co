import React, { useEffect, useState } from "react";
import servicesApi from "../../api/servicesApi";
import ServicesCard from "../../Components/Sercices/ServicesCard";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    servicesApi.get("get-service").then((res) => setService(res.data));
  }, []);
  return (
    <div className="mt-16 px-10">
        <h1 className="text-3xl text-center font-bold">All Services </h1>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 mt-16">
      {service.map((service) => (
        <ServicesCard key={service._id} service={service} />
      ))}
    </div>
    </div>
  );
};

export default Services;
