import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "../../Style.css";
import { Navbar } from "react-bootstrap";

function NavbarHeader() {
  const navigate = useNavigate();

  function navigateToRoute(val, type) {
    navigate(val + (type ?? ''));
  }
  return (
    <>
      <Navbar variant="underline">
        <Nav.Item>
          <Nav.Link onClick={() => navigateToRoute("/")} className="NavItem">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => navigateToRoute("/about")} className="NavItem">
            About Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Services" id="services-dropdown" className="NavItem custom-dropdown">
              <div className="row justify-content-around">
                <div className="col-md-3">
                  <div className="nav-items-heading">IT JOBS</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Financial and Banking</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Healthcare</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>E-Commerce</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>ED TECH</div>
                </div>
                <div className="col-md-3">
                  <div className="nav-items-heading">non-IT JOBS</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Sale and Marketing</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Hospitality</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Banking</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Sales Ed Tech</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>BPO</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Manufacturing</div>
                </div>
                <div className="col-md-3">
                  <div className="nav-items-heading">Other services</div>
                  <div className="nav-items" onClick={() => navigateToRoute("/job-openings")}>Resume Writing</div>
                </div>
              </div>
            </NavDropdown>
        </Nav.Item>
        <Nav.Item style={{marginRight: "2em"}}>
          <Nav.Link onClick={() => navigateToRoute("/contact-us")} className="NavItem">Contact Us</Nav.Link>
        </Nav.Item>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
