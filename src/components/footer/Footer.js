import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid>
      <footer className="page-footer font-small bg-dark">
        <div className="footer-copyright text-center py-3 text-light">
          Ofer :  
          <a href="mailto:ofer_ro@yahoo.com?subject=Mail from Kfar Maimon Cemetery site"> ofer_ro@yahoo.com</a> 
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
