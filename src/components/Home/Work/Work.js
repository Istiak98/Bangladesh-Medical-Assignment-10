import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <div className="container overflow-hidden">
      <strong>
        {" "}
        <h1 className='h2-text'>How It Works</h1>
      </strong>
      <div className="row gx-5 mb-3 g-4">
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    "https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/03/feature1.png"
                  }
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Make Application</h5>
                  <p className="card-text">
                    Having an in-house team of expert medical writers and
                    editors makes all the difference in terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    "https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/03/feature2.png"
                  }
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Get Check-Ups</h5>
                  <p className="card-text">
                    Having an in-house team of expert medical writers and
                    editors makes all the difference in terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    "https://wp.quomodosoft.com/mediguss/wp-content/uploads/2020/03/feature3.png"
                  }
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Great Consultation</h5>
                  <p className="card-text">
                    Having an in-house team of expert medical writers and
                    editors makes all the difference in terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
