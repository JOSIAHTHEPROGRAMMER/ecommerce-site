"use client";


import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import useCartStore from "@/stores/cartStore";
import { CartItemsType, ShippingFormInputs } from "@/types";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsArrowRight, BsTrash2Fill } from "react-icons/bs";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];



const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const { cart, removeFromCart } = useCartStore();
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-blue-600" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-blue-600" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              // SINGLE CART ITEM
              <div
                className="flex items-center justify-between"
                key={item.id + item.selectedSize}
              >
                {/* IMAGE AND DETAILS */}
                <div className="flex gap-8">
                  {/* IMAGE */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* ITEM DETAILS */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs text-gray-400">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-400">
                        Color: {item.title}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* DELETE BUTTON */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                >
                  <BsTrash2Fill className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm   setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-300">
              Please fill in the shipping form to continue.
            </p>
          )}
        </div>
        {/* DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-300">Subtotal</p>
              <p className="font-medium">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-300">Discount(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-300">Shipping Fee</p>
              <p className="font-medium">$10</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <p className="text-gray-400 font-semibold">Total</p>
              <p className="font-medium">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <BsArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;