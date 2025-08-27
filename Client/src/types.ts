import { z } from "zod";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;   // main image
  images: string[];    // additional images
  sizes: string[];
  rating: number;      // average rating (number)
  ratingCount: number; // number of reviews
};



export type ProductsType = ProductType[];

