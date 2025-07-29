// components/FloatingButtons.jsx

"use client";

import { useEffect } from "react";
import Link from "next/link";

const FloatingButtons = () => {
  useEffect(() => {
    // Logika untuk scroll top/down dari file Blade Anda
    const scrollDownButton = document.getElementById("scroll-down");
    const scrollTopButton = document.getElementById("scroll-top");
    const targetElement = document.getElementById("footer");

    if (!scrollDownButton || !scrollTopButton || !targetElement) return;

    const handleScroll = () => {
      if (window.scrollY < 100) {
        scrollDownButton.classList.add("active");
      } else {
        scrollDownButton.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function untuk menghapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll Top */}
      <Link href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </Link>

      {/* Scroll Down */}
      <Link href="#footer" id="scroll-down" className="scroll-down d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-down-short"></i>
      </Link>

      {/* WhatsApp Button */}
      <a href="https://wa.me/+6281806338869" target="_blank" id="whatsapp-btn" className="whatsapp-btn d-flex align-items-center justify-content-center">
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
};

export default FloatingButtons;