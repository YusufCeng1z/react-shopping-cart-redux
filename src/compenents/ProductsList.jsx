import { useState, useEffect } from 'react';
import { getAllProducts } from '../functions/products';

import ProductListItem from './ProductListItem';




export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    }, []); 

  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-4  grid-cols-1 mx-auto mt-5 gap-5">
      {products.map((product,key) => (
        <ProductListItem  key={key} product={product} />
      ))}
    </div>
  );
}