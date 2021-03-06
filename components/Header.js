import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import { Fade } from "react-reveal";

const Header = ({ StartFromTop }) => {
  const [scroll, setScroll] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      className={`${
        !StartFromTop && !scroll
          ? "opacity-100 translate-y-0 md:opacity-0 md:-translate-y-20"
          : "opacity-100 translate-y-0 border-b"
      }  fixed top-0 w-full transition-all duration-150 items-center ring-b ring-b-gray-300 bg-white  z-30`}
    >
      <Fade left={true} duration={500} opposite when={menuIsOpen}>
        <div
          className={`${
            menuIsOpen ? "block" : "hidden"
          } absolute top-full h-screen w-screen bg-white z-50`}
        >
          <div className="flex flex-col items-center mt-20 space-y-9">
            <Link href="/#about">
              <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
                <span className="nav-link">About</span>
              </a>
            </Link>

            <Link href={"/systems?sys=all"}>
              <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
                <span className="nav-link">Systems</span>
              </a>
            </Link>
            <Link href="/blog">
              <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
                <span className="nav-link">Blog</span>
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center text-white px-6 py-3 bg-ffsgPink rounded-lg space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold text-sm">
                <p>Contact us</p>
                <FiArrowUpRight size="1.3em" />
              </a>
            </Link>
          </div>
        </div>
      </Fade>
      <div className="flex items-center  max-w-7xl mx-auto py-3 px-6 md:px-12">
        <div className="flex space-x-10 items-center">
          <Link href="/">
            <a className="w-20 md:w-24 lg:w-28 cursor-pointer">
              <img src="/logo2.png" alt="" />
            </a>
          </Link>
          <Link href="/#about">
            <a className="relative nav hidden md:block hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">About</span>
            </a>
          </Link>

          <Link href={"/systems?sys=all"}>
            <a className="relative nav hidden md:block hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Systems</span>
            </a>
          </Link>
          <Link href="/blog">
            <a className="relative nav hidden md:block hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Blog</span>
            </a>
          </Link>
        </div>
        <div className="md:hidden p-2 ml-auto text-lg border border-ffsgPink text-ffsgPink">
          {menuIsOpen ? (
            <FiMenu onClick={() => setMenuIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setMenuIsOpen(true)} />
          )}
        </div>
        <Link href="/contact">
          <a className="hidden md:flex ml-auto items-center text-white px-8 py-4 bg-ffsgPink rounded-lg space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold">
            <p>Contact us</p>
            <FiArrowUpRight size="1.3em" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
