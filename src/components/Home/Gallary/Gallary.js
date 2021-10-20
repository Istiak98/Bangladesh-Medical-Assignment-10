import React from "react";
import "./Gallary.css";
import G2 from "../../../images/Gallary/G2.jpg";
import G1 from "../../../images/Gallary/G1.jpg";
import G3 from "../../../images/Gallary/G3.jpg";
import G4 from "../../../images/Gallary/G4.jpg";
import G5 from "../../../images/Gallary/G5.jpg";
import G6 from "../../../images/Gallary/G6.jpg";
const Gallary = () => {
  return (
    <div className="container  mt-3 mb-3">
      <div className="shadow p-3 mb-5 bg-body rounded">MEDICAL DELUX TEST</div>
      <div className="row gy-5">
        <div className="col-6">
          <div className="p-3 ">
            <img src={G3} className="img-fluid img-thumbnail" alt="..." />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 ">
            <img src={G4} className="img-fluid img-thumbnail" alt="..." />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 ">
            <img src={G5} className="img-fluid img-thumbnail" alt="..." />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 ">
            <img src={G6} className="img-fluid img-thumbnail" alt="..." />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 ">
            <img src={G1} className="img-fluid img-thumbnail" alt="..." />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 ">
            <img src={G2} className="img-fluid img-thumbnail" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
