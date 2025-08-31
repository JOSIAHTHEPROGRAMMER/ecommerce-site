"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export type Products = {
  id: string | number;
  price: number;
  title: string;
  desc: string;
  sizes: string[];
  images: Record<string, string>;
};

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ row }) => {
      const product = row.original;
      // Get the first image from the images object
      const firstImage = Object.values(product.images)[0];
      return (
        <img
          src={firstImage}
          alt={product.title}
          className="h-8 w-8 rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "desc",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("desc") as string;
     
      return (
        <div className="max-w-xs truncate" title={description}>
          {description}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id.toString())}
            >
              Copy Product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/products/${product.id}`}>
                View Product Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/products/${product.id}/edit`}>
                Edit Product
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];