import React, { useState } from "react";
import "./Sidenav.css";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineLogin } from "react-icons/md";
import { FaRegIdBadge } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Content from "../Content/Content";

function Sidenav() {
  const [cont] = useState([
    { mn: "Typography" },
    { mn: "Color" },
    { mn: "Shadow" },
    { mn: "Icons" },
  ]);
  const [a, seta] = useState("");

  AOS.init();

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xl={2}>
            <div data-aos="fade-right" data-aos-duration="2000" className="d">
              <Container>
                <p className="dash">Dashboard</p>
                <p className="pr">
                  <div className="ho" onClick={() => seta("Dashboard")}>
                    Dashboard
                  </div>
                </p>
                <hr></hr>
                <p className="mt-3">Pages</p>
                <p className="pr1">
                  <div className="ho" onClick={() => seta("Authentication")}>
                    Authentication
                  </div>
                  <div className="mr mt-3" onClick={() => seta("Login")}>
                    <span>
                      <MdOutlineLogin />
                    </span>
                    &nbsp;&nbsp; Login
                  </div>
                  <div className="mr mt-3" onClick={() => seta("Register")}>
                    <span>
                      <FaRegIdBadge />
                    </span>
                    &nbsp; Register
                  </div>
                </p>
                <hr></hr>
                <p>Utilities</p>
                {cont.map((e) => (
                  <div className="mr mt-3" onClick={() => seta(e.mn)}>
                    {e.mn}
                  </div>
                ))}
                <hr></hr>
                <div className="mr mt-4" onClick={() => seta("Sample Page")}>
                  Sample Page
                </div>
                <div className="mr mt-3" onClick={() => seta("Documentation")}>
                  Documentation
                </div>
              </Container>
            </div>
          </Col>
          <Col xl={9}>
                <Content val={a}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sidenav;
