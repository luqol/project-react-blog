import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return(
    <Navbar bg="primary" variant="dark"  className="mt-4 mb-4 p-0 rounded" >
      <Navbar.Brand href='/'>Blog.app</Navbar.Brand> 
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="p-0">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>      
  );
};
  
  export default NavBar;