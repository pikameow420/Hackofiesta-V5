import React from "react";
import { Features, FeaturesProps, ThemeProvider } from "@lobehub/ui";
import { MoonStar, Palette, Zap } from "lucide-react";
import { myFont } from "../common/AnimatedTitle";
import BgGradient from "@/components/atoms/gradientBackground";

const Stats = () => {
  console.log(Features)
  return (
    <ThemeProvider themeMode="dark">
      
    <div className={`md:text-8xl ${myFont.className} sm:text-6xl text-5xl text-center`}>
            Stats
        </div>
    <div className="w-screen flex justify-center items-start p-6 pb-40">
      <Features
        items={[
          {
            description:"Coming Soon",
            icon: Palette,
            title: "BLOCKCHAIN",
          },
          {
            description:"Coming Soon",
            icon: Zap,
            title: "GAME DEVELOPMENT",
          },
          {
            description:"Coming Soon",
            icon: MoonStar,
            title: "AI & ML"
          },
          {
            description:"Coming Soon",
            icon: Palette,
            title: "CLOUD COMPUTING",
          },
          {
            description:"Coming Soon",
            icon: Zap,
            title: "EDUCATION",
          },
          {
            description:"Coming Soon",
            icon: MoonStar,
            title: "INNOVATION"
          },
        ]}
        // itemStyle={{ width:"500px",height:"500px" }}
      />
    </div>
    </ThemeProvider>
  );
};

export default Stats;
