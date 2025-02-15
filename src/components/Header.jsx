import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; 

const Header = () => {
  const { cart } = useCart();
  const totalItems = Object.values(cart || {}).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="light" variant="light" expand="lg" className="fixed-top fixed-navbar shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce Cart</Navbar.Brand>
        <Nav className="ms-auto">
    
          <Nav.Link className="position-relative">
            <FaShoppingCart size={22} />
            {totalItems > 0 && (
              <Badge 
                bg="danger" 
                pill 
                className=" cart-badge "
              >
                {totalItems}
              </Badge>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;