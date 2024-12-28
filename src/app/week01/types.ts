import { Product } from "@/types/product";

export type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

export type ProductPhotosProps = {
  product: Product;
};
