import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
const AllService = () => {
  const [services2, setServices2] = useState([]);
  useEffect(() => {
    fetch("./mediData.json")
      .then((res) => res.json())
      .then((data) => setServices2(data));
  });
  return (
    <div id="services">
      <h4 className="text-primary mt-5">
        OUR <span className="delux">ALLOFFERS</span>
      </h4>
      <div className="service-details">
        {services2.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllService;
