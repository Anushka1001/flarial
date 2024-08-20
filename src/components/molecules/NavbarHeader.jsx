import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "../../Style.css";

function NavbarHeader() {
  const navigate = useNavigate();

  function navigateToRoute(val, type) {
    navigate(val + (type ?? ''));
  }
  return (
    <>
      <Nav variant="underline">
        <Nav.Item>
          <Nav.Link onClick={() => navigateToRoute("/")} className="NavItem">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => navigateToRoute("/about")} className="NavItem">
            About Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="IT Jobs" id="nav-dropdown">
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Finance&Banking")}>Financial and banking</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Healthcare")}>Healthcare</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "E-commerce")}>E-commerce</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "EdTech")}>ED TECH</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Non-IT Jobs" id="nav-dropdown">
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Sale&Marketing")}>Sale and marketing</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Hospitality")}>Hospitality</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Banking")}>Banking</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Sales-EdTech")}>Sales Ed tech</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "BPO")}>BPO</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigateToRoute("/job-openings/", "Manufacturing")}>Manufacturing</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item style={{marginRight: "2em"}}>
          <Nav.Link onClick={() => navigateToRoute("/contact")} className="NavItem">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavbarHeader;
