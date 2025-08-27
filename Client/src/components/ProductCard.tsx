"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";



const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
  });

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
 


  return (
    <CardContainer className="w-full height-full pb-10 cursor-pointer">
  
      <CardBody className="shadow-lg rounded-lg  flex flex-col gap-4 p-4">
        
        {/* IMAGE */}
                  <Link href={`/products/${product.id}`}>
                      <CardItem
                        translateZ="50"
                        className="relative w-full h-56 rounded-md overflow-hidden"
                      >
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 
                                (max-width: 1024px) 50vw, 
                                (max-width: 1536px) 33vw, 
                                25vw"
                          className="object-cover hover:scale-105 transition-all duration-300"
                        />
                      </CardItem>
                   </Link>

                    {/* TITLE + DESCRIPTION */}
            <CardItem translateZ="40" className="flex flex-col gap-2">
            <div className="h-40 overflow-auto scrollbar-hide">
            
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-sm text-gray-400 mt-5">{product.description}</p>
            </div>
            </CardItem>



        {/* SIZE SELECT */}
        <CardItem translateZ="30" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-500">Size</span>
          <select
            name="size"
            id="size"
            className="bg-blue-950/70 ring ring-amber-50 rounded-md px-2 py-1"
            onChange={(e) =>
              handleProductType({ type: "size", value: e.target.value })
            }
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size.toUpperCase()}
              </option>
            ))}
          </select>
        </CardItem>

        {/* RATINGS */}
        <CardItem translateZ="20">
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => {
                const filled = i < Math.round(product.rating);
                return (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      filled ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.07 9.387c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.96z" />
                  </svg>
                );
              })}
            </div>
            <span className="text-gray-500 text-sm">
              ({product.ratingCount})
            </span>
          </div>
        </CardItem>

        {/* PRICE + BUTTON */}
        <CardItem
          translateZ="40"
          className="flex items-center justify-between mt-2"
        >
          <p className="font-medium">${product.price.toFixed(2)}</p>

          <button
            className="ml-5 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
          >
            <FiShoppingCart className=" w-4 h-4" />
            Add to Cart
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProductCard;

