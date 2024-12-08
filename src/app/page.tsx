 
import AirMax from "@/components/AirMax";
import DontMiss from "@/components/DontMiss";
import Essential from "@/components/Essential";
import Featured from "@/components/Featured";
import GearUp from "@/components/GearUp";
import Hero from "@/components/Hero";
import Icons from "@/components/icons";
 

export default function Home() {
  return (
         <div>
         <Hero />
         <AirMax />
         <Featured />
         <GearUp />
         <DontMiss />
         <Essential />
         <Icons />
         </div>
  );
}
