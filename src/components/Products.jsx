import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result));
  }, []);

  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom: '10px' }} key={product.id}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  ));

  return (
    <div style={{ marginTop: '20px' }}>
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  );
}

export default Products;
