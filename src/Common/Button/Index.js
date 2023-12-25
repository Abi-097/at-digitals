import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomButton = ({
  color,
  FSize,
  width,
  Fcolor,
  border,
  BorderRadius,
  children,
  ...rest
}) => {
  const buttonStyle = {
    backgroundColor: color,
    fontSize: FSize,
    borderColor: color,
    color: Fcolor,
    fontWeight: 500,
    width: width,
    borderRadius: BorderRadius,
    border: border,
  };
  return (
    <Button style={buttonStyle} {...rest}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string.isRequired,
  Bcolor: PropTypes.string.isRequired,
  FSize: PropTypes.string.isRequired,
  BorderRadius: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default CustomButton;
