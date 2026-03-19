import { Hero } from "@/components/sections/hero";
import { Featured } from "@/components/sections/featured";
import { SystemPreview } from "@/components/sections/system-preview";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Featured />
      <SystemPreview />
    </div>
  );
}