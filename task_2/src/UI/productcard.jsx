import { DataContext } from "../shared/containers/provider";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { setData } = useContext(DataContext);

  const handleClick = () => {
    setData(product);
  };
  return (
    <div className="bg-slate-200 max-w-sm rounded-md overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">Price: ${product.price}</p>
        <p className="text-gray-700 text-base">Rating: {product.rating}</p>
        <p className="text-gray-700 text-base">Discount: {product.discount}%</p>
        <p className="text-gray-700 text-base">Availability: {product.availability}</p>
      </div>
    </div>
  );
};

export default ProductCard;