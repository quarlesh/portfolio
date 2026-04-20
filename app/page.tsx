import { Hero } from "@/components/sections/hero";
import { Featured } from "@/components/sections/featured";
import { Card } from "@/components/ui/card";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div className="space-y-16">
      <Card>
        <Hero />
      </Card>
      <Featured />
      <Analytics />
    </div>
  );
}
