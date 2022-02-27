import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:8000/api/');
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Show All the Products</h1>
      <div className="products-card-info">
        {products.map((product, index) => (
          <Card className="m-2 rounded shadow-lg " style={{ width: '22rem' }}>
            <Card.Img
              className="product-img"
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.price}
                <br />
                {product.description}
                <br />
                {product.category}
                <br />
              </Card.Text>
              <Link className="btn btn-primary" to={`/${product.id}/`}>
                Details
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
