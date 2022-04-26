import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              width={100}
              src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/movies">
                Movies
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
