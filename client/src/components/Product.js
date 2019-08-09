import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCT_DETEAILS } from '../queries';


const Product = (props) => {
  let { id } = props.match.params;
  id = Number(id) ;
  const { data, loading, error } = useQuery(GET_PRODUCT_DETEAILS, {variables: { id }});

  if(loading) return <h4>Loading...</h4>;
  if(error) return  <h4>An error occured</h4>;

  const { name, description, price, quantity, image } = data.product;
  console.log(data);
  return (
    <section className="d-flex">
      <img src={image} alt="path" />
      <div className="d-flex flex-column">
        <h2>{name}</h2>
        <div>
          <p>{`Ksh. ${price}`}</p>
          <span>{`${quantity} in stock`}</span>
        </div>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Product
