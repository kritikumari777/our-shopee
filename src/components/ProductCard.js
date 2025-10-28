import { TEXTS } from '@/app/constants/texts';

const ProductCard = ({key, product, onAdd }) => {
    return (
    <div key={key} className="border rounded p-4 shadow-sm flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-3" />
      <h5 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h5>
      <div className="mt-auto">
        <div className="font-semibold">₹ {product.price}</div>
        <button
          className="mt-2 btn btn-primary w-full"
          onClick={() => onAdd(product)}
        >
         {TEXTS.ADD_TO_CART}
        </button>
      </div>
    </div>
  );
}

export default ProductCard