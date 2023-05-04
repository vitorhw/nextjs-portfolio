import "../global.css";
import { Inter, Fira_Code, Noto_Serif } from "@next/font/google";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ContactMe } from "./components/contactMe";

export const metadata: Metadata = {
  title: {
    default: "VITORH",
    template: "%s | VITORH",
  },
  description: "Frontend software engineer",
  openGraph: {
    title: "VITORH",
    description: "Frontend software engineer",
    url: "https://dev.vitorh.work",
    siteName: "VITORH",
    images: [
      {
        url: "/banner.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "VITORH",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const display = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto",
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${[inter.variable, display.variable, fira.variable].join(
        " "
      )} scroll-smooth min-h-screen`}
    >
      <body
        className={`bg-gray-950 text-gray-100 ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Header />
        <Analytics />
        {children}
        <ContactMe />
        <Footer />
      </body>
    </html>
  );
}
