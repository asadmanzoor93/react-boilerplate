import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container fluid>
        <Row>
          <Col className="text-center">
            <span>Powered by</span>
            <Link to="https://edly.io/" target="_blank" className="logo-edly">
              <img
                src="https://d1d3mtskh6y3sd.cloudfront.net/powered-by/logo-edly.svg"
                alt="edly"
              />
            </Link>
            <Link
              to="https://open.edx.org/"
              target="_blank"
              className="logo-open-edx"
            >
              <img
                src="https://d1d3mtskh6y3sd.cloudfront.net/powered-by/logo-open-edx.svg"
                alt="open edX"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
