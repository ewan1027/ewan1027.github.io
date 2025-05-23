"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-6 border-t border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-10">
        <div className="footer flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left">
          <p className="montserrat-thin mb-4 md:mb-0">
            © 2025 | Ewan Dirubut
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center md:justify-start">
            <div className="footer-content text-center md:text-left">
              <b className="block mb-1">Call</b>
              <p>+94 77 368 1923</p> {/* Updated with your phone number */}
            </div>

            <div className="footer-content text-center md:text-left">
              <b className="block mb-1">Write</b>
              <a
                href="mailto:ewan6852@gmail.com"
                className="text-black hover:underline"
              >
                ewan6852@gmail.com {/* Updated with your email */}
              </a>
            </div>

            <div className="footer-content text-center md:text-left">
              <b className="block mb-1">Follow</b>
              <div className="flex gap-2 mt-1 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/EwanDirubut/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://ext.same-assets.com/3953338052/1390246219.png"
                    alt="LinkedIn"
                    width={25}
                    height={25}
                  />
                </a>
                <a href="https://github.com/EwanDirubut" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://ext.same-assets.com/3953338052/3684934911.png"
                    alt="GitHub"
                    width={25}
                    height={25}
                  />
                </a>
                {/* If you have additional social media, you can add them here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
