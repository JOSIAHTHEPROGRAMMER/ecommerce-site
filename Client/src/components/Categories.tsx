"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import { CiShoppingBasket } from "react-icons/ci";
import { FaShirtsinbulk } from "react-icons/fa";
import { FaDiamond, FaHand, FaShirt, FaVenus } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { IoGlassesOutline } from "react-icons/io5";
import { PiFootprints } from "react-icons/pi";
import { FaLaptop, FaMobileAlt, FaMotorcycle, FaCar, FaTabletAlt } from "react-icons/fa";
import {
  GiSofa,
  GiPerfumeBottle,
  GiLipstick,
  GiWatch,
  GiSunglasses,
  GiCookingPot,
  GiBasket,
  GiTShirt,
} from "react-icons/gi";

export const categories = [
  {
    name: "All",
    icon: <CiShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Beauty",
    icon: <GiLipstick className="w-4 h-4" />,
    slug: "beauty",
  },
  {
    name: "Fragrances",
    icon: <GiPerfumeBottle className="w-4 h-4" />,
    slug: "fragrances",
  },
  {
    name: "Furniture",
    icon: <GiSofa className="w-4 h-4" />,
    slug: "furniture",
  },
  {
    name: "Groceries",
    icon: <GiBasket className="w-4 h-4" />,
    slug: "groceries",
  },
  {
    name: "Home Decoration",
    icon: <IoGlassesOutline className="w-4 h-4" />,
    slug: "home-decoration",
  },
  {
    name: "Kitchen Accessories",
    icon: <GiCookingPot className="w-4 h-4" />,
    slug: "kitchen-accessories",
  },
  {
    name: "Laptops",
    icon: <FaLaptop className="w-4 h-4" />,
    slug: "laptops",
  },
  {
    name: "Mens Shirts",
    icon: <GiTShirt className="w-4 h-4" />,
    slug: "mens-shirts",
  },
  {
    name: "Mens Shoes",
    icon: <PiFootprints className="w-4 h-4" />,
    slug: "mens-shoes",
  },
  {
    name: "Mens Watches",
    icon: <GiWatch className="w-4 h-4" />,
    slug: "mens-watches",
  },
  {
    name: "Mobile Accessories",
    icon: <FaMobileAlt className="w-4 h-4" />,
    slug: "mobile-accessories",
  },
  {
    name: "Motorcycle",
    icon: <FaMotorcycle className="w-4 h-4" />,
    slug: "motorcycle",
  },
  {
    name: "Skin Care",
    icon: <GiLipstick className="w-4 h-4" />,
    slug: "skin-care",
  },
  {
    name: "Smartphones",
    icon: <FaMobileAlt className="w-4 h-4" />,
    slug: "smartphones",
  },
  {
    name: "Sports Accessories",
    icon: <GoBriefcase className="w-4 h-4" />,
    slug: "sports-accessories",
  },
  {
    name: "Sunglasses",
    icon: <GiSunglasses className="w-4 h-4" />,
    slug: "sunglasses",
  },
  {
    name: "Tablets",
    icon: <FaTabletAlt className="w-4 h-4" />,
    slug: "tablets",
  },
  {
    name: "Tops",
    icon: <GiTShirt className="w-4 h-4" />,
    slug: "tops",
  },
  {
    name: "Vehicle",
    icon: <FaCar className="w-4 h-4" />,
    slug: "vehicle",
  },
  {
    name: "Womens Bags",
    icon: <GoBriefcase className="w-4 h-4" />,
    slug: "womens-bags",
  },
  {
    name: "Womens Dresses",
    icon: <FaVenus className="w-4 h-4" />,
    slug: "womens-dresses",
  },
  {
    name: "Womens Jewellery",
    icon: <FaDiamond className="w-4 h-4" />,
    slug: "womens-jewellery",
  },
  {
    name: "Womens Shoes",
    icon: <PiFootprints className="w-4 h-4" />,
    slug: "womens-shoes",
  },
  {
    name: "Womens Watches",
    icon: <GiWatch className="w-4 h-4" />,
    slug: "womens-watches",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 bg-blue-100/20 rounded-md hover:bg-blue-200/30 text-sm font-medium">
       <div className="items-center justify-center w-full text-2xl "><h2>Categories</h2></div> 
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-blue-100/10 p-2 rounded-lg mt-2 text-sm">
          {categories.map((category) => (
            <div
              className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md transition-colors ${
                category.slug === selectedCategory
                  ? "text-cyan-500 bg-white/30"
                  : "text-gray-500 hover:bg-white/50 hover:text-amber-50"
              }`}
              key={category.name}
              onClick={() => handleChange(category.slug)}
            >
              {category.icon}
              {category.name}
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Categories;
