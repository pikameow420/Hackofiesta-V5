import React from "react";
import { Features, FeaturesProps, ThemeProvider } from "@lobehub/ui";
import { MoonStar, Palette, Zap } from "lucide-react";
import { myFont } from "../common/AnimatedTitle";

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
            description:
              "Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",
            icon: Palette,
            title: "Themeable",
          },
          {
            description:
              "voids unnecessary styles props at runtime, making it more performant than other UI libraries.",
            icon: Zap,
            title: "Fast",
          },
          {
            description:
              "Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",
            icon: MoonStar,
            title: "Light & Dark UI"
          },
          {
            description:
              "Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",
            icon: Palette,
            title: "Themeable",
          },
          {
            description:
              "voids unnecessary styles props at runtime, making it more performant than other UI libraries.",
            icon: Zap,
            title: "Fast",
          },
          {
            description:
              "Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",
            icon: MoonStar,
            title: "Light & Dark UI"
          },
        ]}
        // itemStyle={{ backgroundColor: "black" ,color:"white" }}
      />
    </div>
    </ThemeProvider>
  );
};

export default Stats;
