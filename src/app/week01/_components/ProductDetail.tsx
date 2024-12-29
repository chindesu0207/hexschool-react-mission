import { ProductPhotosProps } from "../types";

const ProductDetail = ({ product }: ProductPhotosProps) => {
  return (
    <div>
      <div className="text-3xl font-bold mb-2">{product.title}</div>
      <span className="rounded-lg bg-orange-500 text-sm font-bold text-muted px-2 py-1">
        {product.category}
      </span>
      <div className="text-gray-500 my-4">{product.description}</div>
      <div>商品規格: {product.content}</div>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-orange-500 my-6">
          NT${product.price}/{product.unit}
        </span>
        <span className="text-base text-gray-400 line-through">
          NT${product.origin_price}/{product.unit}
        </span>
      </div>
      <div>商品編號: {product.id}</div>
      <div>
        剩餘數量:
        {product.is_enabled ? product.num : "目前缺貨"}
      </div>
    </div>
  );
};

export default ProductDetail;
