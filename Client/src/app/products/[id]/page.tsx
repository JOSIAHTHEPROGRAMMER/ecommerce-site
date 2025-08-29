import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const defaultSizes = ["s", "m", "l", "xl", "xxl"];

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const {id} = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: ProductType = await res.json();

  return {
    title: product.title,
    description: product.description,
  };
};

//Temp for TESTING 
const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { size?: string };
}) => {
  // fetch product
    const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
   const data = await res.json();
  const product: ProductType = data;

  // fetch reviews for this product


  const ratingCount = data.reviews ? data.reviews.length : 0;

  const selectedSize = searchParams?.size || defaultSizes[0];

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[3/3]">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-contain rounded-md"
        />
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">{product.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => {
                const filled = i < Math.round(product.rating);
                return (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.07 9.387c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.96z" />
                  </svg>
                );
              })}
            </div>
            <span className="text-gray-400 text-sm">
              ({ratingCount})
            </span>
          </div>
        </div>

        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>

        <ProductInteraction
          product={{ ...product, sizes: defaultSizes }}
          selectedSize={selectedSize}
        />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" alt="klarna" width={50} height={25} />
          <Image src="/cards.png" alt="cards" width={50} height={25} />
          <Image src="/stripe.png" alt="stripe" width={50} height={25} />
        </div>

        <p className="text-gray-300 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-gray-400">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-gray-400">Privacy Policy</span>.
          You authorize us to charge your selected payment method for the total
          amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-gray-400">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
