import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Tenantdata from './Tenantdata';

// export default function 
// () {
//   return (
//     <Nav>
//     <Nav.Item>
//       <Nav.Link href="/">Dashboard</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//       <Nav.Link href="/tenantinfo">Tenants</Nav.Link>
//     </Nav.Item>
//   </Nav>
//   )
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menubar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/tenantinfo">Tenants</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}