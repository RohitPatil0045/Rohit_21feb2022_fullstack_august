import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  //delete product

  const deleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}`);
    navigate('/');
  };
  return (
    <div>
      <h1>Product Details</h1>
      <div className="single-product-info">
        <img src={product.image} alt={product.name} height="300" width="auto" />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>

        <Link className="btn btn-primary m-2" to={`/${product.id}/update`}>
          Update
        </Link>
        <Link
          className="btn btn-danger m-2"
          onClick={() => deleteProduct(product.id)}
          to={``}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
