import { Hero } from "@/components/sections/hero";
import { Featured } from "@/components/sections/featured";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-16">
      <Card>
        <Hero />
      </Card>
      <Featured />
    </div>
  );
}