import React from "react";
import "./Appoinment.css";
const Appoinment = () => {
  return (
      
    <div className="wrapper rounded bg-white">
      <div className="h3">BANGLADESH MEDICAL</div>
      <div className="h5">Appoinment Form</div>
      <div className="form">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            {" "}
            <label className='text-start'>First Name</label>{" "}
            <input type="text" className="form-control" required />{" "}
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            {" "}
            <label className='text-start'>Last Name</label>{" "}
            <input type="text" className="form-control" required />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            {" "}
            <label className='text-start'>Choose a Date for Appoinment</label>{" "}
            <input type="date" className="form-control" required />{" "}
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            {" "}
            <label className='text-start'>Gender</label>
            <div className="d-flex align-items-center mt-2">
              {" "}
              <label className="option">
                {" "}
                <input type="radio" name="radio" />
                Male <span className="checkmark"></span>{" "}
              </label>{" "}
              <label className="option ms-4">
                {" "}
                <input type="radio" name="radio" />
                Female <span className="checkmark"></span>{" "}
              </label>{" "}
              <label className="option ms-4">
                {" "}
                <input type="radio" name="radio" />
                Others <span className="checkmark"></span>{" "}
              </label>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            {" "}
            <label className='text-start'>Email</label>{" "}
            <input type="email" className="form-control" required />{" "}
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            {" "}
            <label className='text-start'>Phone Number</label>{" "}
            <input type="tel" className="form-control" required />{" "}
          </div>
        </div>
        <div className=" my-md-2 my-3">
          {" "}
          <label className='text-start'>Department</label>{" "}
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
        <div className="btn btn-primary mt-3">Submit</div>
      </div>
    </div>
  );
};

export default Appoinment;
