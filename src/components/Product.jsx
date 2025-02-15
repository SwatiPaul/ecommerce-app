import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext"; 

const Product = () => {
  const { cart, updateCart } = useCart(); 
  const [products, setProducts] = useState([]);
  console.log('products',products);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
   <div className="product-list">
     <Container>
      <Row>
        {products.map((product) => {
          const quantity = cart[product.id]?.quantity || 0;
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
              <Card className="mb-4 p-2 text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
               
                  <Card.Text className="text-start">
                    <p className="m-0">{product.title.substring(0, 20)}</p>
                    {/* <p className="m-0">Description: {product.description.substring(0, 40)}</p> */}
                    <p className="m-0">Price: ${product.price}</p>
                  </Card.Text>

                  {quantity > 0 ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <Button variant="secondary" size="sm" onClick={() => updateCart(product, quantity - 1)}>-</Button>
                      <span className="mx-2">{quantity}</span>
                      <Button variant="secondary" size="sm" onClick={() => updateCart(product, quantity + 1)}>+</Button>
                    </div>
                  ) : (
                    <Button className="addCart" onClick={() => updateCart(product, 1)}>Add to Cart</Button>
                  )}


                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
   </div>
  );
};

export default Product;
