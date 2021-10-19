import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="image-aboutus-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About Us</h1>
              <p className="image-aboutus-para">BANGLADESH MEDICAL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-secktion paddingTB60">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">
                Who we are and <br /> what we do
              </h1>
              <p className="lead">
                This is the world's best Medical Service
                <br />
                easy and quick
              </p>
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "darkcyan" }}>Mission</h2>
              <p>
                The District of BANGLADESH MEDICAL Hospital Association is the
                unifying voice for hospitals and health systems in the District
                of CHITTAGONG and works to advance health policy to strengthen
                the District’s world-class health care system to ensure that it
                is equitable and accessible to all.
              </p>
              <h2 style={{ color: "darkcyan" }}>Vision</h2>
              <p>
                An efficient and effective health care delivery system that
                supports a healthy and vibrant community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button type="button" className="btn btn-primary align-center mb-3">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default About;
