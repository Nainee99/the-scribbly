"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/login");

  return (
    <div className="container">
      <div className="wrapper">
        {!isAuthRoute && <Navbar />}
        {children}
        {!isAuthRoute && <Footer />}
      </div>
    </div>
  );
};

export default LayoutWrapper;
