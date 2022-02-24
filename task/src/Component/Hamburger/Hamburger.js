import React, { useState } from "react";
import "./Hamburger.css";
import { Container, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidenav from "../Sidenav/Sidenav";
import Content from "../Content/Content";


function Hamburger() {
  const [view, setview] = useState(false);
  console.log(view);
  return (
    <>
      <Navbar className="nav" expand={false}>
        <Container fluid className="justify-content-space-between">
          <h1 className="menu">
            <GiHamburgerMenu onClick={() => setview(!view)} />
          </h1>
          <Navbar.Brand id="logo">Task</Navbar.Brand>
        </Container>
      </Navbar>

      {view ? <Sidenav/> : <Content/>}
    </>
  );
}

export default Hamburger;
