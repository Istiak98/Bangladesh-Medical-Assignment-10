import React from "react";
import "./Review.css";
import Home2 from "../../../images/Home2.png";
import Home3 from "../../../images/Home3.png";
import Home4 from "../../../images/Home4.png";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="container mb-3">
      <div className="row g-2">
        <div className="col-md-12 col-sm-12">
          <div className="p-3">
            <h4 className="h4-text">How To Brush Your Teeth</h4>

            <h2 className="fs-1 h2-text fw-bolder">Every Day</h2>

            <img className="w-75 mb-3" src={Home2} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h1 className="h4-text text-start">Better Doctors,</h1>

            <h2 className="text-start fs-1 h2-text fw-bolder">Better Care</h2>
            <p className="text-start">
              We help hospitals, senior living facilities, and other healthcare
              facilities effectively communicate important information to
              patients, caregivers, and staff.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <img className="w-50 mb-3" src={Home3} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="col-md-6 col-sm-12">
            <div className="p-3">
              <img className="w-100 mb-3" src={Home4} alt="" />

              <Link to="/allservice">
                <button className="btn btn-outline-primary">
                  Go To Services
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h1 className="h4-text text-start">Leading You To</h1>

            <h2 className="text-start fs-1 h2-text fw-bolder">Better Health</h2>
            <p className="text-start">
              Get your patients through the door on time and decrease no shows
              with appointment reminders.{" "}
            </p>
          </div>
        </div>
       








      </div>
    </div>
  );
};

export default Review;
