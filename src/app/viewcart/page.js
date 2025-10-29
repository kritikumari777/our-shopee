"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import ViewCardTable from "@/components/ViewCardTable";
import ButtonComp from "@/components/ButtonComp";
import { TEXTS } from "../constants/texts";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return <EmptyState title={TEXTS.EMPTY_CART} isViewCard={true} />;
  }

  return (
    <div className="container py-5">
      <h2 className="text-3xl font-bold mb-6">{TEXTS.YOUR_CARD}</h2>
      <ViewCardTable cartItems={cartItems} dispatch={dispatch} />
      <div className="d-flex justify-content-between align-items-center mt-4">
        <ButtonComp
          label="Clear Cart"
          onClick={() => dispatch(clearCart())}
          className="btn-outline-danger"
        />
        <h4 className="fw-bold">Total Price: ₹{totalAmount}</h4>
      </div>
      <div className="mt-4 text-end">
        <Link href="/" className="btn btn-outline-success">
         {TEXTS.CONTINUE_SHOPING}
        </Link>
      </div>
    </div>
  );
}
