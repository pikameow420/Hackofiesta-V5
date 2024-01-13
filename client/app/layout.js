import { Inter } from "next/font/google";
import "./globals.css";
import MouseTrail from "@/components/molecules/common/MouseTrail";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hackofiesta 5.0",
  description:
    "Tune in to 36 hours of creativity, coding and collaboration leading to some of the most innovative hacks you have ever seen. Hackofiesta is the biggest offline hackathon in Uttar Pradesh, conducted by IIIT Lucknow.",
  keywords: [
    "hackofiesta",
    "hackathon",
    "offline hackathon",
    "iiit lucknow",
    "iiitl",
    "hackathon in lucknow",
    "hackathon in india",
    "hackathon in uttar pradesh",
    "hackathon in up",
    "hackathon in iiit lucknow",
    "hackathon in iiitl",
  ],
  canonical: "https://www.hackofiesta.com/",
  metadataBase: new URL("https://www.hackofiesta.com"),
  openGraph: {
    url: "https://www.hackofiesta.com/",
    title: "Hackofiesta 5.0",
    description:
      "Tune in to 36 hours of creativity, coding and collaboration leading to some of the most innovative hacks you have ever seen. Hackofiesta is the biggest offline hackathon in Uttar Pradesh, conducted by IIIT Lucknow.",
    images: [
      {
        url: "/og0.png",
        width: 1200,
        height: 650,
        alt: "Hackofiesta Landing Page",
        type: "image/jpeg",
      },
      {
        url: "/og1.png",
        width: 800,
        height: 800,
        alt: "Hackofiesta Landing Page",
        type: "image/jpeg",
      },
      {
        url: "/og2.png",
        width: 500,
        height: 500,
        alt: "Hackofiesta Logo",
        type: "image/png",
      },
    ],
    siteName: "Hackofiesta 5.0",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },
  twitter: {
    handle: "@hof_iiitl",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KCPPJMEM4B" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-KCPPJMEM4B');
        `}
        </Script>
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
