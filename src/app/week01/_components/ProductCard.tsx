import Image from "next/image";
import { ProductProps } from "@/types/product";

const ProductCard = ({ product, onClick }: ProductProps) => {
  return (
    <div
      className="grid grid-cols-2 border rounded-lg border-gray-300 cursor-pointer overflow-hidden gap-4"
      onClick={onClick}
    >
      <div className="relative w-full aspect-square">
        <Image
          sizes="12.5rem"
          src={product.imageUrl}
          alt={product.title}
          fill
        />
      </div>
      <div className="flex flex-col justify-between py-8">
        <div>
          <div className="text-xl">{product.title}</div>
          <div className="text-gray-500">{product.content}</div>
        </div>
        <div className="">
          <div className="text-base text-gray-400 line-through">
            NT${product.origin_price}
          </div>
          <div className="text-2xl text-orange-500">NT${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
