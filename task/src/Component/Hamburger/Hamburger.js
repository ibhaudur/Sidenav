import React, { useState } from "react";
import "./Hamburger.css";
import { Container, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../Image/logo.png'
import Sidenav from "../Sidenav/Sidenav";

export const Context = React.createContext();

function Hamburger() {
  const [view, setview] = useState(false);
  console.log(view);
  return (
    <Context.Provider value={view}>
      <Container fluid>
        <Navbar bg="dark" expand={false}>
          <Container className="justify-content-space-around">
            <Navbar>
              <img className="img" src={logo} />
            </Navbar>
            <h1 className="menu">
              <GiHamburgerMenu onClick={() => setview(!view)} />
            </h1>
          </Container>
        </Navbar>
        {view ? <Sidenav/> : ""}
      </Container>
    </Context.Provider>
  );
}

export default Hamburger;
