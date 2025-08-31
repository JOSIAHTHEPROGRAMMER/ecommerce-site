import { ChartAreaInteractive as AppAreaChart} from "@/components/AppAreaChart";
import {ChartBarMixed as AppBarChart} from "@/components/AppBarChart";
import {ChartPieLabelList as AppPieChart} from "@/components/AppPieChart";
// import {ChartRadialShape as AppRadialChart} from "@/components/AppRadialChart"

import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      {/* <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppRadialChart />
      </div> */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"> 
         <TodoList/> 
         </div> 
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Products" />
      </div>
    </div>
  );
};

export default Homepage;