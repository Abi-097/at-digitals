import React from "react";
import { heroImage } from "../../image";
import Button from "react-bootstrap/Button";
import "./Style.css";
const Hero = () => {
  return (
    <div className="position-relative">
      <img src={heroImage} alt="" width="100%" />
      <div className="position-absolute bottom-0 start-0 p-4 text-white d-none d-md-block">
        <div className="border border-3 border-primary py-3 px-4 custom-bg-color custom-size">
          <p className="fw-bold mb-4">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <Button className="btn btn-light CustomButton">
            Get free consultation
          </Button>
        </div>
      </div>
      <div className="d-md-none">
        <div className="border border-3 border-primary py-3 px-4 custom-bg-color text-white">
          <p className="fw-bold fs-3 mb-4">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>

          <Button className="btn btn-light CustomButton">
            Get free consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
