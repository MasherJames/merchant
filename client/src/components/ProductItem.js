import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product: {name, description, price, quantity, image, id} }) => {
  
  return (
    <article className="d-flex">
      <img src={image} alt="path" />
      <div className="d-flex flex-column">
        <Link to={`/products/${id}`}>
          <h2>{name}</h2>
        </Link>
        <div>
          <p>{`Ksh. ${price}`}</p>
          <span>{`${quantity} in stock`}</span>
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProductItem
