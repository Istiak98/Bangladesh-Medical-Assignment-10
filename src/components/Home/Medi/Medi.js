import React from "react";
import M1 from "../../../images/M1.png";
import M2 from "../../../images/M2.png";
import M3 from "../../../images/M3.png";
import M4 from "../../../images/M4.png";
import M5 from "../../../images/M5.png";
import M6 from "../../../images/M6.png";
const Medi = () => {
  return (
    <div className="container overflow-hidden mb-5">
      <h2>OUR DELUX</h2>
      <h1 className="h2-text"> SURGERIES</h1>
      <div className="row gy-5">
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            <img src={M1} className="w-25" alt="" />
            <div>
              <p className="mx-5 align-middle">Cardiac Surgery</p>
              <small>Worlds Best Cardiac Surgery</small>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            <img src={M2} className="w-25" alt="" />
            <div>
              <p className="mx-5 align-middle">Neurological Surgery</p>
              <small>Worlds Best Neurological Surgery</small>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            <img src={M3} className="w-25" alt="" />
            <div>
              <p className="mx-5 align-middle">Thoracic Surgery</p>
              <small>Worlds Best Thoratic Surgery</small>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            <img src={M4} className="w-25" alt="" />
            <div>
              <p className="mx-5 align-middle ">Orthopedic Surgery</p>
              <small>Worlds Best Orthopedic Surgery.</small>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            <img src={M5} className="w-25" alt="" />
            <div>
              <p className="mx-5 align-middle">Vascular Surgery</p>
              <small>Worlds Best Vascular Surgery</small>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="p-3 border d-flex ">
            <img src={M6} className="w-25" alt="" />
            <div>
              <p className="mx-5 align-middle">General Surgery</p>
              <small>Worlds Best General Surgery </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medi;
