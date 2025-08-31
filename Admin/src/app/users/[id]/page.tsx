import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {ChartRadialShape as AppRadialChart} from "@/components/AppRadialChart"


const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Elon Musk</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
                    {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://pbs.twimg.com/profile_images/1936002956333080576/kqqe2iWO_400x400.jpg" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Elon Musk</h1>
            </div>
           <p className="text-sm text-muted-foreground">
                I am a technology entrepreneur, engineer, and investor known for
                founding and leading companies such as Tesla, SpaceX, Neuralink, and The
                Boring Company. As I am recognized for my ambitious vision to revolutionize
                transportation on Earth and in space, I will continue to push the boundaries
                of innovation in sustainable energy, artificial intelligence, and space
                exploration.
            </p>

          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
          <div className="space-y-4 mt-4">
                <div className="flex flex-col gap-2 mb-8">
                    <p className="text-sm text-muted-foreground">
                    Profile completion
                    </p>
                    <Progress value={95} />
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Full Name:</span>
                    <span>Elon Musk</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Email:</span>
                    <span>elon@tesla.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Phone:</span>
                    <span>+1 310 555 0420</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Address:</span>
                    <span>123 Tesla X street</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">City:</span>
                    <span>Austin, TX</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Role:</span>
                    <Badge>User</Badge>
                </div>
                </div>

            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2014.01.01
            </p>
          </div>
          {/* CARD LIST CONTAINER */}
          {/* <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div> */}
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          {/* <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://pbs.twimg.com/profile_images/1936002956333080576/kqqe2iWO_400x400.jpg" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Elon Musk</h1>
            </div>
           <p className="text-sm text-muted-foreground">
                I am a technology entrepreneur, engineer, and investor known for
                founding and leading companies such as Tesla, SpaceX, Neuralink, and The
                Boring Company. As I am recognized for my ambitious vision to revolutionize
                transportation on Earth and in space, I will continue to push the boundaries
                of innovation in sustainable energy, artificial intelligence, and space
                exploration.
            </p>

          </div> */}
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">Tesla Earnings</h1>
            <AppRadialChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;