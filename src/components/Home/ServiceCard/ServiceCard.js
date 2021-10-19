import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css'
const ServiceCard = (props) => {
  const { title, image, description, price ,id} = props.service;
  return (
    <div className="serviceCard pb-1 mb-5">
            <img src={image} alt="" />
            <h3 className='title'>{title}</h3>
            <h5>Price: {price}$</h5>
            <p className="px-3">{description}</p>
            <Link to={`/detailService/${id}`}>
                <button className="btn btn-primary">Show Details</button>
            </Link>
        </div>

  
  );
};

export default ServiceCard;
