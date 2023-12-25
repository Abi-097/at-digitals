import React from "react";
import { heroImage } from "../../image";
import "./Style.css";
import CustomButton from "../../Common/Button/Index";
const Hero = () => {
  return (
    <div className="position-relative">
      <img src={heroImage} alt="" width="100%" />
      <div className="position-absolute bottom-0 start-0 p-4 text-white d-none d-md-block">
        <div className="py-3 px-4 custom-bg-color custom-size">
          <p className="fw-bold mb-4">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <CustomButton
            color="rgba(242, 141, 53, 1) "
            border="none"
            Fcolor="rgba(255, 255, 255, 1) "
            BorderRadius="0"
            FSize="14px"
            className="btn btn-light"
          >
            Get free consultation
          </CustomButton>
        </div>
      </div>
      <div className="d-md-none">
        <div className="border border-3 border-primary py-3 px-4 custom-bg-color text-white">
          <p className="fw-bold fs-3 mb-4">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>

          <CustomButton
            color="rgba(242, 141, 53, 1) "
            border="none"
            Fcolor="rgba(255, 255, 255, 1) "
            BorderRadius="0"
            FSize="14px"
            className="btn btn-light"
          >
            Get free consultation
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
