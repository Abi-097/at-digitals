import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { bodyImage1 } from "../../image";
import { bodyImage2 } from "../../image";
import "./Style.css";
import CustomButton from "../../Common/Button/Index";

const Body = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={bodyImage2} alt={bodyImage2} />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <div className="text-content">
              <h3 className="bodyC-h3">Web & Mobile App Development</h3>
              <p className="bodyC-p">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <CustomButton color="#F28D35" width="7rem" border="none">
                Learn More
              </CustomButton>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            className="d-flex flex-column justify-content-center"
            xs={{ order: 2 }}
            md={{ order: 1 }}
          >
            <div className="text-content">
              <h3 className="bodyC-h3">Digital Strategy Consulting</h3>
              <p className="bodyC-p">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <CustomButton color="#F28D35" width="7rem" border="none">
                Learn More
              </CustomButton>
            </div>
          </Col>
          <Col xs={{ order: 1 }} md={{ order: 2 }}>
            <img src={bodyImage1} alt={bodyImage1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
