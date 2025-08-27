"use client";

import { useEffect, useState } from "react";
import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TracingBeam } from "./ui/tracing-beam";

const defaultSizes = ["s", "m", "l", "xl", "xxl"];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  const [products, setProducts] = useState<ProductsType>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.products.map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          thumbnail: item.thumbnail,
          images: item.images,
          sizes: defaultSizes,
          rating: item.rating,
          ratingCount: item.reviews?.length || 0,
        }));
        setProducts(updated);
      })
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  // Pagination calculations
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="w-full">
      
        <Categories />
        {params === "products" && <Filter />}

       <TracingBeam className="min-h-screen flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
     
      {/* Pagination */}
      {products.length > productsPerPage && (
        <div className="flex justify-center mt-30">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
      </TracingBeam>

      {/* View all link */}
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div> 
  );
};

export default ProductList;
