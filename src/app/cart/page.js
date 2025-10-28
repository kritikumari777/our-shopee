"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../store/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Link href="/" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-3xl font-bold mb-6">Your Cart 🛍️</h2>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    width="60"
                    className="rounded"
                  />
                </td>
                <td>{item.title}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>

        <h4 className="fw-bold">Total: ₹{totalAmount}</h4>
      </div>

      <div className="mt-4 text-end">
        <Link href="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
