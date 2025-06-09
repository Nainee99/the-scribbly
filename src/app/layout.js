import { ThemeContextProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import LayoutWrapper from "@/components/custom/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "theScribbly | Where Stories Take Shape",
  description:
    "Discover inspiring stories, thoughtful ideas, and personal insights from real voices on theScribbly — your creative blogging space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <LayoutWrapper>{children}</LayoutWrapper>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
