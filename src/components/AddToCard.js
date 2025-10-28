import React from 'react'

const AddToCard = ({key, product, onAdd }) => {
    return (
    <div key={key} className="border rounded p-4 shadow-sm flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-3" />
      <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h3>
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

export default AddToCard