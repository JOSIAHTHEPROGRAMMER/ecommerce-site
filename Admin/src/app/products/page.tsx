import { Products,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Products[]> => {
  return [
    { id: "f390967", price: 199, title: "Premium Leather Jacket", desc: "High-quality genuine leather jacket with premium stitching", sizes: ["S", "M", "L", "XL"], images: { main: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop" } },
    { id: "a3560fe", price: 129, title: "Designer Running Shoes", desc: "Performance running shoes with advanced cushioning technology", sizes: ["8", "9", "10", "11", "12"], images: { main: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop" } },
    { id: "3fb377e", price: 299, title: "Luxury Watch Collection", desc: "Elegant timepiece with sapphire crystal and automatic movement", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&h=500&fit=crop" } },
    { id: "f9e8331", price: 249, title: "Wireless Noise-Canceling Headphones", desc: "Premium audio experience with active noise cancellation", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&h=500&fit=crop" } },
    { id: "cfa703e", price: 89, title: "Organic Cotton T-Shirt Pack", desc: "Sustainable and comfortable cotton t-shirts in various colors", sizes: ["S", "M", "L", "XL"], images: { main: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop" } },
    { id: "bf605b6", price: 79, title: "Minimalist Backpack", desc: "Sleek and functional backpack with multiple compartments", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop" } },
    { id: "64412b8", price: 199, title: "Smart Home Hub", desc: "Central control unit for your smart home ecosystem", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop" } },
    { id: "883c255", price: 59, title: "Yoga Mat Premium", desc: "Eco-friendly yoga mat with superior grip and cushioning", sizes: ["Standard", "Long"], images: { main: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" } },
    { id: "7426aa5", price: 149, title: "Ceramic Cookware Set", desc: "Non-toxic ceramic coated cookware for healthy cooking", sizes: ["10-Piece", "15-Piece"], images: { main: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1589985270826-4b7fe135a9c4?w=500&h=500&fit=crop" } },
    { id: "025e615", price: 129, title: "Gaming Mechanical Keyboard", desc: "RGB mechanical keyboard with customizable macro keys", sizes: ["Full Size", "Tenkeyless"], images: { main: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500&h=500&fit=crop" } },
    { id: "93c914a", price: 69, title: "Bluetooth Portable Speaker", desc: "Compact wireless speaker with impressive sound quality", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop" } },
    { id: "8329b99", price: 39, title: "Stainless Steel Water Bottle", desc: "Insulated bottle that keeps drinks hot/cold for 24 hours", sizes: ["500ml", "1L", "1.5L"], images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=500&fit=crop" } },
    { id: "f810700", price: 49, title: "Wireless Charging Pad", desc: "Fast wireless charging compatible with most smartphones", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1609091839311-d5365f2e0c5a?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1609091839311-d5365f2e0c5a?w=500&h=500&fit=crop" } },
    { id: "ee3bbff", price: 89, title: "Organic Skincare Kit", desc: "Natural skincare products for daily routine", sizes: ["Basic Kit", "Deluxe Kit"], images: { main: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop" } },
    { id: "d1d5a9a", price: 599, title: "Professional Camera Lens", desc: "High-performance lens for professional photography", sizes: ["One Size"], images: { main: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop" } },
    { id: "7739285", price: 299, title: "Ergonomic Office Chair", desc: "Comfortable chair designed for long working hours", sizes: ["Standard", "Plus"], images: { main: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop" } },
    { id: "f3e2914", price: 149, title: "Smart Fitness Tracker", desc: "Advanced health monitoring with heart rate and sleep tracking", sizes: ["S", "M", "L"], images: { main: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&h=500&fit=crop" } },
    { id: "cf74eab", price: 29, title: "Artisanal Coffee Beans", desc: "Premium single-origin coffee beans, freshly roasted", sizes: ["250g", "500g", "1kg"], images: { main: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop" } },
    { id: "3284eb8", price: 899, title: "4K Ultra HD Television", desc: "Crystal clear picture quality with smart TV features", sizes: ["55\"", "65\"", "75\""], images: { main: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&h=500&fit=crop" } },
    { id: "76a534f", price: 79, title: "Portable Power Bank", desc: "High-capacity power bank for charging devices on the go", sizes: ["10000mAh", "20000mAh", "30000mAh"], images: { main: "https://images.unsplash.com/photo-1598931626145-5e41b685e3f4?w=500&h=500&fit=crop", alt: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop" } }
  ];
};

const ProductsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-primary text-black rounded-md">
        <h1 className="font-semibold flex justify-center text-center ">All Products</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default ProductsPage;