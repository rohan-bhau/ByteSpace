import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace - Next-Gen Tech Education & Online Courses",
  description: "Get access to unlimited courses taught by top industry mentors. Master web development, AI, UI/UX design, and career-defining skills with ByteSpace.",
  keywords: ["tech education", "online courses", "learn programming", "web development", "UI UX design", "ByteSpace"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
