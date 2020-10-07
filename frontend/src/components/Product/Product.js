import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ color: 'whitesmoke' }}>
          <Card.Title as='div' variant='top'>
            {' '}
            <strong>{product.name}</strong>{' '}
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={` ${product.numReviews} reviews`}
              color='whitesmoke'
            />
          </div>
        </Card.Text>
        <Card.Text as='h3' style={{ color: 'whitesmoke' }}>
          $ {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
