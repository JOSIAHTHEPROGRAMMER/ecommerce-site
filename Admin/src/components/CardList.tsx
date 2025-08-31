import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    images: [ "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
     ],
      price: 990,
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    images:[ "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    ],
    price: 340,
    badge: "Trending"
  }
];


const latestTransactions = [
  {
    id: 1,
    title: "Order #12345 Payment Received",
    badge: "Investor Update",
    image:
      "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Oder #98765 Payment Failed",
    badge: "Government Deal",
    image:
      "https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Refund Processed for Order #56789",
    badge: "Venture Capital",
    image:
      "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Invoice #12345",
    badge: "User Growth",
    image:
      "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Inventory System Upgrade",
    badge: "Infrastructure",
    image:
      "https://pbs.twimg.com/profile_images/1785089965619118080/NATKmh45_400x400.jpg",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {title === "Popular Products"
          ? popularProducts.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-0">${item.price}</CardFooter>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0">${item.count /1000}K</CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default CardList;