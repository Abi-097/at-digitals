import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomButton = ({ color, Bcolor, Fcolor, width, children, ...rest }) => {
  const buttonStyle = {
    backgroundColor: color,
    fontSize: Fcolor,
    borderColor: color,
    fontWeight: 500,
    width: width,
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
  Fcolor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default CustomButton;
