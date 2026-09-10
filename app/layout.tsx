import type { Metadata } from "next";
import {
  Cinzel,
  Gowun_Batang,
  IM_Fell_English,
  Nanum_Myeongjo,
} from "next/font/google";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const imFellEnglish = IM_Fell_English({
  variable: "--font-im-fell-english",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "이길현",
  description: "고려대학교 인공지능학과 이길현의 소개 페이지",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${nanumMyeongjo.variable} ${cinzel.variable} ${imFellEnglish.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <div aria-hidden="true" className="tavern-hearth" />
        <div aria-hidden="true" className="tavern-weave" />
        <div aria-hidden="true" className="tavern-vignette" />
        {children}
      </body>
    </html>
  );
}
