import React from "react";
import { Features, FeaturesProps, ThemeProvider } from "@lobehub/ui";
import { MoonStar, Palette, Zap } from "lucide-react";
import { myFont } from "../common/AnimatedTitle";
import BgGradient from "@/components/atoms/gradientBackground";


const Stats = () => {
  console.log(Features);
  return (
    <ThemeProvider themeMode="dark">
      <div
        className={`md:text-8xl ${myFont.className} sm:text-6xl text-5xl text-center md:pt-32`}
      >
        TRACKS
      </div>
      <div className="w-screen flex justify-center items-start p-6 md:pb-40">
        <Features
          items={[
            {
              description:
                "Build decentralized apps and smart contracts using blockchain technology.",
              icon: Zap,
              title: "BLOCKCHAIN",
            },
            {
              description:
                " Create captivating games with innovative features and immersive experiences",
              icon: Zap,
              title: "GAME DEVELOPMENT",
            },
            {
              description:
                "Develop intelligent solutions using AI and ML technologies.",
              icon: MoonStar,
              title: "AI & ML",
            },
            {
              description:
                "Build scalable applications leveraging cloud services and modern computing paradigms.",
              icon: Palette,
              title: "CLOUD COMPUTING",
            },
            {
              description:
                "Innovate in education technology to improve learning experiences and collaboration.",
              icon: Zap,
              title: "EDUCATION",
            },
            {
              description:
                " Think creatively and push boundaries to develop solutions with significant impact",
              icon: MoonStar,
              title: "INNOVATION",
            },
          ]}
          // itemStyle={{ width:"500px",height:"500px" }}
        />
      </div>
    </ThemeProvider>
  );
};

export default Stats;
