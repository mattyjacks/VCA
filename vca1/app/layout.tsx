import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VentureCapitalArts.com | Making a Mockery of Money",
  description: "A satirical marketplace for buying and selling shares of private companies. Parent company: MattyJacks.com. We're a parody of normal capitalism.",
  keywords: ["venture capital", "private equity", "satire", "parody", "capitalism", "MattyJacks", "investment"],
  openGraph: {
    title: "VentureCapitalArts.com | Making a Mockery of Money",
    description: "The most absurdly transparent marketplace for private company shares. Because capitalism should be funny.",
    type: "website",
  },
};

const playfair = Playfair_Display({
  variable: "--font-playfair",
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
