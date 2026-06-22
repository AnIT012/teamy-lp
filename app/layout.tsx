import type { Metadata } from "next";
import { Geist, Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TeaMy — あなた専属のAIチーム",
  description:
    "ひとりのAIに聞くのをやめた。役割の異なる8人のAIがDiscordで議論し、結論ではなく成果物を返す。個人開発プロダクト TeaMy。",
  openGraph: {
    title: "TeaMy — あなた専属のAIチーム",
    description: "役割の異なる8人のAIがDiscordで議論し、成果物を返すAIチーム。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} ${zenKaku.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
