import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";

const Cart = () => {
  const { cart, updateCart } = useCart();

  const cartItems = Object.values(cart || {});
  console.log(cartItems);

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
    <Header/>
    <div className="product-list" >
    <Container className="mt-4">
      {cartItems.length === 0 ? (
        <div className="cart-container">
          <h6 className="text-center text-muted">
            Your Cart Bag is Empty Please Add Product in your Cart
          </h6>
        </div>
      ) : (
        <>
        
         <Row >
            {cartItems.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={3} lg={4}>
                <Card className="mb-4 p-2 text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <Card.Body>
                    {/* <Card.Title>{product.title.substring(0, 20)}...</Card.Title> */}
                    <Card.Text className="text-start">
                    <p className="m-0">Price: {product.category}</p>
                        <p className="m-0">Price: {Math.floor(product.price) }</p>
                        <p className="m-0">Total Price: {Math.floor(product.price * product.quantity)}</p>

                    </Card.Text>

                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => updateCart(product, product.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{product.quantity}</span>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => updateCart(product, product.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          

          <div className="price-section">
            Total Amount:
            <span>{Math.floor(totalPrice)}</span>
          </div>
        </>
      )}
    </Container>
    </div>
    </>
  );
};

export default Cart;
