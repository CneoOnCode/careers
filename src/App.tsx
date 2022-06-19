import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import r from "./Routes/Routes";
function App() {
  const name: String = "Kevin's Career";
  const reee = r.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">{name}</Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dream/1">Dream #1</Nav.Link>
            <Nav.Link href="/dream/2">Dream #2</Nav.Link>

            <Nav.Link href="/SWE">Careers</Nav.Link>
            <Nav.Link href="/uni">University</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>{reee}</Routes>
    </>
  );
}

export default App;
