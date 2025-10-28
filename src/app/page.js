'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../store/cartSlice';
import Link from 'next/link';
import Search from '@/components/Search';
import Filter from '@/components/Filter';
import EmptyState from '@/components/EmptyState';
import ProductCard from '@/components/ProductCard';
import { TEXTS } from './constants/texts';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
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
          setFiltered(res.data);
          setCategories(['All', ...new Set(res.data.map(p => p.category))]);
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

  // Filter logic
  useEffect(() => {
    let temp = products;

    if (search.trim() !== '') {
      temp = temp.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      temp = temp.filter(p => p.category === selectedCategory);
    }

    setFiltered(temp);
  }, [search, selectedCategory, products]);

  const handleAdd = (prod) => {
    dispatch(addToCart({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      image: prod.image
    }));
    alert(TEXTS.SUCCESS_MESSAGE);
  };

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-3 text-gray-700">{TEXTS.LOADING}</span>
    </div>
  );;
  if (error) return <div className="p-8">Error: {error}</div>;

  return (
    <main className="container mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">{TEXTS.HEADING}</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Search search={search} onChange={(e) => setSearch(e.target.value)} />
          <Filter selectedCategory={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} categories={categories} />
          <Link href="/viewcart" className="btn btn-outline-primary w-full sm:w-auto text-center">
            {TEXTS.VIEW_CARD}
          </Link>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title={TEXTS.EMPTY_STATE_TITLE} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} />
          ))}
        </div>
      )}
    </main>
  );
}
