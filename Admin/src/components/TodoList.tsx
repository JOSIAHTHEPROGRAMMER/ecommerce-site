"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
{/* LIST */}
<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
  <div className="flex flex-col gap-4">
    {/* LIST ITEM */}
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item1" checked />
        <label htmlFor="item1" className="text-sm text-muted-foreground">
          Approve next Starship test launch
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item2" checked />
        <label htmlFor="item2" className="text-sm text-muted-foreground">
          Review Tesla Cybertruck production schedule
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item3" />
        <label htmlFor="item3" className="text-sm text-muted-foreground">
          Post Mars colonization update on X
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item4" />
        <label htmlFor="item4" className="text-sm text-muted-foreground">
          Check Neuralink brain-chip trial results
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item5" />
        <label htmlFor="item5" className="text-sm text-muted-foreground">
          Meet with engineers about Hyperloop progress
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item6" />
        <label htmlFor="item6" className="text-sm text-muted-foreground">
          Inspect solar roof installations
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item7" />
        <label htmlFor="item7" className="text-sm text-muted-foreground">
          Call SpaceX investors for quarterly update
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item8" />
        <label htmlFor="item8" className="text-sm text-muted-foreground">
          Review AI research for Tesla Autopilot
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item9" checked />
        <label htmlFor="item9" className="text-sm text-muted-foreground">
          Schedule meeting with NASA officials
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item10" checked />
        <label htmlFor="item10" className="text-sm text-muted-foreground">
          Inspect Gigafactory Berlin production line
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item11" checked />
        <label htmlFor="item11" className="text-sm text-muted-foreground">
          Approve Falcon 9 launch manifest
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item12" checked />
        <label htmlFor="item12" className="text-sm text-muted-foreground">
          Review boring tunnel Las Vegas expansion plans
        </label>
      </div>
    </Card>
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Checkbox id="item13" checked />
        <label htmlFor="item13" className="text-sm text-muted-foreground">
          Host X Spaces Q&A about future of humanity
        </label>
      </div>
    </Card>
  </div>
</ScrollArea>

    </div>
  );
};

export default TodoList;