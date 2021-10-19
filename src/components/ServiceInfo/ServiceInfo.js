import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const ServiceInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mediData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactService = data.filter((sr) => sr.id === id);
  // console.log(ExactService)
  return (
    <div className="col ">
      <div className="p-3">
        <h4 className="h4-text">SERVICE DETAILS AT ONE GLANCE</h4>
        <img
          src={ExactService[0]?.image}
          className="img-thumbnail w-25"
          alt="..."
        />
        <h1 className="fs-1">{ExactService[0]?.title}</h1>
        <h2 className="fs-1 h2-text fw-bolder">
          Survice Fee:{ExactService[0]?.price} $
        </h2>
        <h5 className="h5-text">Description:{ExactService[0]?.description}</h5>
        <Link to="/home">
          <button className="btn btn-outline-primary" type="submit">
            GO TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ServiceInfo;
