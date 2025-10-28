'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../store/cartSlice';
import Link from 'next/link';

function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded p-4 shadow-sm flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-3" />
      <h3 className="text-sm font-medium mb-2">{product.title}</h3>
      <div className="mt-auto">
        <div className="font-semibold">₹ {product.price}</div>
        <button
          className="mt-2 btn btn-primary w-full"
          onClick={() => onAdd(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    axios.get('/api/products')
      .then(res => {
        if (!canceled) {
          setProducts(res.data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!canceled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => { canceled = true; }
  }, []);

  const handleAdd = (prod) => {
    dispatch(addToCart({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      image: prod.image
    }));
  }

  if (loading) return <div className="p-8">Loading products...</div>;
  if (error) return <div className="p-8">Error: {error}</div>;

  return (
    <main className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/cart" className="btn btn-outline-primary">
          View Cart
        </Link>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={handleAdd} />
        ))}
      </div>
    </main>
  )
}
