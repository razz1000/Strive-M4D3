import { Navbar, Nav, NavDropdown } from "react-bootstrap";


let MyNavbar = () => { 
return ( 
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Browse" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Something 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Something 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something 3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default MyNavbar 

