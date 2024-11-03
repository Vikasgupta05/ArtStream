// import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaCog } from "react-icons/fa";
import styles from '../assets/css/SignIn.module.css';

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState(null);

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <Container fluid className="px-0">
//       <Navbar className="mb-3 mt-3 ms-3 w-100 justify-content-center "> {/* Full-width Navbar */}
//         <Nav className="w-100 d-flex justify-content-center align-items-center gap-2 gap-md-4 gap-lg-6">
//           <Link 
//             to="/all" 
//             className={`${styles.navBar} nav-link ${activeLink === "all" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
//             onClick={() => handleLinkClick("all")}
//           >
//             All
//           </Link>
//           <Link 
//             to="/music" 
//             className={`${styles.navBar} nav-link ${activeLink === "music" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
//             onClick={() => handleLinkClick("music")}
//           >
//             Music
//           </Link>
//           <Link 
//             to="/dance" 
//             className={`${styles.navBar} nav-link ${activeLink === "dance" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
//             onClick={() => handleLinkClick("dance")}
//           >
//             Dance
//           </Link>
//           <Link 
//             to="/standup" 
//             className={`${styles.navBar} nav-link ${activeLink === "standup" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
//             onClick={() => handleLinkClick("standup")}
//           >
//             Standup
//           </Link>
//           <Link 
//             to="/anchor" 
//             className={`${styles.navBar} nav-link ${activeLink === "anchor" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
//             onClick={() => handleLinkClick("anchor")}
//           >
//             Anchor
//           </Link>
//           {/* Search Input */}
//           <div className="d-flex align-items-center pd-0">
//             <Form.Control 
//               type="text" 
//               placeholder="Search categories..." 
//               style={{ height: '35px'}}
//               className="me-0" 
//             />
//             <Button variant="link" className="me-3">
//               <FaSearch />
//             </Button>
//           </div>
//         </Nav>
//       </Navbar>

     
//     </Container>
//   );
// };





import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  div,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "../assets/css/navbar.css";

const NavBar = () => {
  const location = useLocation();
  const [userId, setUserID] = useState(localStorage.getItem("userId"));
  const [userData, setUserData] = useState();
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <>
      <Navbar bg="dark" expand="lg" className="px-3">
        <Container fluid>
         

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "9px",
                  marginRight: "9px",
                }}
                to={"all"}
                className={`${styles.navBar} nav-link ${activeLink === "all" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
                onClick={() => handleLinkClick("all")}
              >
                ALL
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "9px",
                  marginRight: "9px",
                }}
                to={"music"}
                className={`${styles.navBar} nav-link ${activeLink === "music" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
                onClick={() => handleLinkClick("music")}
              >
                Music
              </Link>


              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "9px",
                  marginRight: "9px",
                }}
                to={"dance"}
                className={`${styles.navBar} nav-link ${activeLink === "dance" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
                onClick={() => handleLinkClick("dance")}
              >
                Dance
              </Link>
              
              

              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "9px",
                  marginRight: "9px",
                }}
                to={"Standup"}
                className={`${styles.navBar} nav-link ${activeLink === "Standup" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
                onClick={() => handleLinkClick("Standup")}
              >
                Standup
              </Link>


              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "9px",
                  marginRight: "9px",
                }}
                to={"Anchor"}
                className={`${styles.navBar} nav-link ${activeLink === "Anchor" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
                onClick={() => handleLinkClick("Anchor")}
                
              >
                Anchor
              </Link>



              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "9px",
                  marginRight: "9px",
                }}
                to={"contactUs"}
                className={`${styles.navBar} nav-link ${activeLink === "contactUs" ? styles.activeColor : ""} fs-md-5 fs-lg-3`} 
                onClick={() => handleLinkClick("contactUs")}
              >
                Contact Us
              </Link>
             
            </Nav>

            <div style={{backgroundColor:"wheat"}} className="d-flex align-items-center pd-0">
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

            <Nav>
              {userData ? (
                <>
                  <NavDropdown
                    align="end"
                    title={userId ? userData?.firstName : "Login"}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      {" "}
                      <Link className="text-decoration-none" to="/">
                        Setting
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      {" "}
                      <Link className="text-decoration-none" to="/">
                        Log out
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "9px",
                    marginRight: "9px",
                  }}
                  to={"/login"}
                >
                  Login
                </Link>
              )}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default NavBar;