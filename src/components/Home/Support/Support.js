import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";
const Support = () => {
  return (
    <div className="container mb-3">
      <div className="row g-2">
        <div className="col-md-6 col-sm-12">
          <div className="p-3 text-start">
            <h4 className="h4-text">GET THE NOTIFICATION</h4>
            <h1 className="fs-1">We have some</h1>
            <h2 className="fs-1 h2-text fw-bolder">Good news</h2>
            <h5 className="h5-text">
              Sign up for Medicare newsletter to receive all the new offers and
              discounts from Medicare clinic. Discounts are only valid four our
              newsletter subscribers.
            </h5>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type in your email address"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mx">
          <div className="p-3 text-start">
            <h4 className="h4-text">SERVICES AT ONE GLANCE</h4>
            <h1 className="fs-1">How can we</h1>
            <h2 className="fs-1 h2-text fw-bolder">Help you?</h2>
            <h5 className="h5-text">
              Credibly innovate granular internal or “organic“ sources whereas
              high standards in web-readiness.
            </h5>
            <form className="d-flex">
              <Link to="/allservice">
                <button className="btn btn-outline-primary" type="submit">
                  View Our Services
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="col justify-content-center">
          <div className="p-3 ">
            <h4 className="h4-text">BOOK WITHIN MINUTES</h4>
            {/* <h1 className='fs-1'>How can we</h1> */}
            <h2 className="fs-1 h2-text fw-bolder">Consult our doctors</h2>
            <small className="h5-text">
              Credibly innovate granular internal or “organic“ sources <br />{" "}
              whereas high standards in web-readiness.
            </small>
            <div className=" my-md-2 my-3">
              {" "}
              <label className="">Department</label>{" "}
              <select id="sub" required>
                <option value="" selected hidden>
                  Choose Department
                </option>
                <option value="Dental Clinic">Dental Clinic</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Women’s Health">Women’s Health</option>
                <option value="Infectious Diseases">Infectious Diseases</option>
                <option value="Maternity Services">Maternity Services</option>
                <option value="Others">Others</option>
              </select>{" "}
            </div>

            <button className="btn btn-outline-primary align-middle" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
