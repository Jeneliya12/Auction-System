import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import ProductItem from './ProductItem';
import Button from '../../shared/components/FormElements/Button';
import './ProductList.css';

const ProductList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Products Found. Maybe Create One?</h2>
          <Button to="/products/new">Share Product</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          biddingprice={product.biddingprice}
          creatorId={product.creator}
          onDelete= {props.onDeleteProduct}
        />
      ))}
    </ul>
  );
};

export default ProductList;
