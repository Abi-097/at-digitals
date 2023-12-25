import React from "react";
import "./Style.css";
import { logo } from "../../image";
const Foot = () => {
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1 ">
              <h3>
                <img src={logo} alt={logo} />
              </h3>
              <p className="footer-p">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-2 order-lg-last">
              <h5>Our Technologies</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    ReactJS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Gatsby
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    NextJS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    NodeJS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    GraphQL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Laravel
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Our Services</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Social Media Marketing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Web & Mobile App Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Data & Analytics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Google Marketing solutions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Search Engine Optimization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <hr className="hr-line" />
          <div className="Last-footer">
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
