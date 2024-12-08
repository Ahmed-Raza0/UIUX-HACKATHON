 
import AirMax from "@/components/AirMax";
import DontMiss from "@/components/DontMiss";
import Essential from "@/components/Essential";
import Featured from "@/components/Featured";
import GearUp from "@/components/GearUp";
import Hero from "@/components/Hero";
import Icons from "@/components/icons";
import Link from "next/link";
 

export default function Home() {
  return (
         <div>
          <Link href="/Product"> 
         <Hero />
         <AirMax />
         <Featured />
         <GearUp />
         <DontMiss />
         <Essential />
         <Icons />
         </Link>

         </div>
  );
}
