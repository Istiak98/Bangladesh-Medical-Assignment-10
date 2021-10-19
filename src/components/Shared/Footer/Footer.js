import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-2 item">
              <h3>OUR DELUX</h3>
              <ul>
                <li>
                  <a href="/">Dental Clinic</a>
                </li>
                <li>
                  <a href="/">Orthopedic</a>
                </li>
                <li>
                  <a href="/">Women’s Health</a>
                </li>
                <li>
                  <a href="/">More....</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3>gO tO</h3>
              <ul>
                <li>
                  <a href="/">HOME</a>
                  {/* <NavLink to="/home">Home</NavLink> */}
                </li>
                <li>
                <a href="/">SURVICES</a>
                  {/* <NavLink to="/class">ALL Classes</NavLink> */}
                </li>
                <li>
                <a href="/">GALLARY</a>
                  {/* <NavLink to="/gallary">GALLARY</NavLink> */}
                </li>
                <li>
                <a href="/">ABOUT US</a>
                  {/* <NavLink to="/about">About Us</NavLink> */}
                </li>
                <li>
                <a href="/">CONTACT US</a>
                  {/* <NavLink to="/contact">Contact Us</NavLink> */}
                </li>
                <li>
                <a href="/">TAKE AN APPOINMENT</a>
                  {/* <NavLink to="/contact">Contact Us</NavLink> */}
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>BANGLADESH MEDICAL</h3>
              <p>
              At BANGLADESH MEDICAL , providing our patients with a trusted and compassionate environment for healthcare is central to our mission. We draw strength from our purpose, which is above all to help and to heal. Our physicians, nurses and other caregivers & supporting staff are passionate about providing the right care at the right time, bringing hope and healing to our patients and their families.
              </p>
            </div>
          </div>
          <p className="copyright">BANGLADESH MEDICAL © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;