import React from "react";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Projector,
  ChevronDown,
  Shirt,
  ShoppingBag,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import EditUser from "./EditUser";
import AddOrder from "./AddOrder";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const SidebarApp = () => {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-background border-r border-border"
    >
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="https://pbs.twimg.com/profile_images/1936002956333080576/kqqe2iWO_400x400.jpg"
                  className="rounded-full"
                  alt="logo"
                  width={25}
                  height={25}
                />
                <span>Elon Musk</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold text-muted-foreground px-2 py-1">
            Your DashBoard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full justify-start  ">
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors"
                    >
                      <item.icon className="h-4 w-4 text-primary " />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge className="text-primary">
                      404
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Products</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus className="text-primary" />{" "}
            <span className="sr-only ">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/products">
                    <Shirt className="text-primary" />
                    See All Products
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button className="bg-transparent hover:bg-sidebar-accent w-full justify-start hover:text-amber-50 text-sidebar-secondary shadow-none ">
                        <Plus className="text-primary" /> Add Product
                      </Button>
                    </SheetTrigger>

                    <AddProduct />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button className="bg-transparent hover:bg-sidebar-accent w-full justify-start hover:text-amber-50 text-sidebar-secondary shadow-none ">
                        <Plus className="text-primary" /> Add Category
                      </Button>
                    </SheetTrigger>

                    <AddCategory />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
  

        <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus className="text-primary" />{" "}
            <span className="sr-only ">Add User</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <User2 className="text-primary" />
                    See All Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button className="bg-transparent hover:bg-sidebar-accent w-full justify-start hover:text-amber-50 text-sidebar-secondary shadow-none ">
                        <Plus className="text-primary" /> Add User
                      </Button>
                    </SheetTrigger>

                    <EditUser />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
            
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Payments / Orders</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus className="text-primary" />{" "}
            <span className="sr-only ">Add Order</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/payments">
                    <ShoppingBag className="text-primary" />
                    See All Transactions
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button className="bg-transparent hover:bg-sidebar-accent w-full justify-start hover:text-amber-50 text-sidebar-secondary shadow-none ">
                        <Plus className="text-primary" /> Add Order
                      </Button>
                    </SheetTrigger>

                    <AddOrder />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
            
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
    </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 className="text-primary" /> Space X{" "}
                  <ChevronUp className="ml-auto text-primary" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarApp;
