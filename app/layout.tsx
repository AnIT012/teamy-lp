import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeaMy 🍵 — あなた専属のAIチーム",
  description:
    "ひとりのAIに聞くのをやめた。役割の違う8人のAIがDiscordで議論し、正直に・切らさず成果物を納品する。個人開発プロダクト TeaMy の紹介。",
  openGraph: {
    title: "TeaMy 🍵 — あなた専属のAIチーム",
    description:
      "役割の違う8人のAIがDiscordで議論し、成果物を納品するAIチーム。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@600;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
