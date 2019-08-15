import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { ADD_PRODUCT, GET_PRODUCTS } from '../queries';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [addProduct, { data }] = useMutation(ADD_PRODUCT);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };

  const handleImageChange = e => {
    setImage(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    addProduct({variables: { 
      name, description, price, quantity, image },
      refetchQueries: [{ query: GET_PRODUCTS }]
    });
  };

  return (
    <form onSubmit={handleBookSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" id="" value={name} onChange={handleNameChange} placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="" value={description} onChange={handleDescriptionChange} placeholder="Enter Description" />
      </div>
      <div className="form-group">
        <input type="number" className="form-control" id="" value={price} onChange={handlePriceChange} placeholder="Enter Price" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="" value={quantity} onChange={handleQuantityChange} placeholder="Enter Quantity" />
      </div>
      <div className="form-group">
        <input type="file" className="form-control-file" id="" value={image} onChange={handleImageChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddProduct
