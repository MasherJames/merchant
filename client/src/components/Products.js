import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_PRODUCTS } from '../queries';
import ProductItem from './ProductItem';

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if(loading) return <h4>Loading...</h4>;
  if(error) return  <h4>An error occured</h4>;

  return (
    <section>
      {data.products && data.products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  )
}

export default Products
