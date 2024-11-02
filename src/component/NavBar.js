import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaCog } from "react-icons/fa";
import styles from '../assets/css/SignIn.module.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Container fluid className="px-0">
      <Navbar className="mb-3 mt-3 ms-3 w-100 justify-content-center "> {/* Full-width Navbar */}
        <Nav className="w-100 d-flex justify-content-center align-items-center gap-2 gap-md-4 gap-lg-6">
          <Link 
            to="/all" 
            className={`${styles.navBar} nav-link ${activeLink === "all" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
            onClick={() => handleLinkClick("all")}
          >
            All
          </Link>
          <Link 
            to="/music" 
            className={`${styles.navBar} nav-link ${activeLink === "music" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
            onClick={() => handleLinkClick("music")}
          >
            Music
          </Link>
          <Link 
            to="/dance" 
            className={`${styles.navBar} nav-link ${activeLink === "dance" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
            onClick={() => handleLinkClick("dance")}
          >
            Dance
          </Link>
          <Link 
            to="/standup" 
            className={`${styles.navBar} nav-link ${activeLink === "standup" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
            onClick={() => handleLinkClick("standup")}
          >
            Standup
          </Link>
          <Link 
            to="/anchor" 
            className={`${styles.navBar} nav-link ${activeLink === "anchor" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
            onClick={() => handleLinkClick("anchor")}
          >
            Anchor
          </Link>
          {/* Search Input */}
          <div className="d-flex align-items-center pd-0">
            <Form.Control 
              type="text" 
              placeholder="Search categories..." 
              style={{ height: '35px'}}
              className="me-0" 
            />
            <Button variant="link" className="me-3">
              <FaSearch />
            </Button>
          </div>
        </Nav>
      </Navbar>

      {/* Bottom Navbar */}
      <Navbar bg="light" fixed="bottom" className="justify-content-around">
        <Button variant="light">
          <FaHome />
        </Button>
        <Button variant="light">
          <FaSearch />
        </Button>
        <Button variant="light">
          <FaCog />
        </Button>
      </Navbar>
    </Container>
  );
};

export default NavBar;
