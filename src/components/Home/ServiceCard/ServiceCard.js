import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css'
const ServiceCard = (props) => {
  const { title, image, description, price ,id} = props.service;
  return (
    
    //    <div className="col-md-4  mt-3  ">
    //   <div className="card  mx-5 mb-3" style={{ width: "18rem" }}>
    //     <img src={image} className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{title}</h5>
    //       <h6 className="card-title">Fee:$ {price}</h6>
    //       <p className="card-text">{description.slice(0, 100)}</p>
    //       <a href="#details" className="btn btn-primary">
    //         Details
    //       </a>
    //     </div>
    //   </div>
    // </div>
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
