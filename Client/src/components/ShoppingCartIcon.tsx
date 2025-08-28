"use client";

import useCartStore from "@/stores/cartStore";

import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

const ShoppingCartIcon = () => {
 const { cart, hasHydrated } = useCartStore();

 if (!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
      <CgShoppingCart  className='text-2xl cursor-pointer hover:text-blue-500   '/>
      <span className="absolute -top-3 -right-3 bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;