import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/product";

const ProductPhotos = ({ product }: ProductProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>(product.imageUrl);
  const photos: string[] = [product.imageUrl, ...product.imagesUrl];

  useEffect(() => {
    setSelectedPhoto(product.imageUrl);
  }, [product]);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-square mx-auto">
        <Image
          src={selectedPhoto}
          sizes="25rem"
          className="object-cover"
          alt={product.title}
          fill
        />
      </div>
      <div className="flex w-full mx-auto gap-3">
        {photos.map((photo, index) => {
          return (
            <div
              className="relative w-full aspect-square cursor-pointer"
              key={index}
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo}
                sizes="12.5rem"
                alt={product.title + index}
                fill
              />
            </div>
          );
        })}
        {photos.length < 3
          ? [...Array(3 - photos.length)].map((_, index) => {
              return <div className="w-full bg-transparent" key={index}></div>;
            })
          : ""}
      </div>
    </div>
  );
};

export default ProductPhotos;
