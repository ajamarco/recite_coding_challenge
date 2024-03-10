"use client";

// Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeLink =
    "flex items-center active-nav-link text-white py-2 pl-4 nav-item";
  const inactiveLink =
    "flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item";

  const categories = ["Home Page", "Missions", "Ships", "Rockets"];

  return (
    <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
      <div className="flex items-center justify-between">
        <a
          href="index.html"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          SpaceX Visualizer
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          <p className="text-3xl">☰</p>
        </button>
      </div>

      <nav className={isOpen ? "flex flex-col pt-4" : "hidden"}>
        {/* map through the categories object and display the links */}
        {categories.map((category) => (
          <Link
            href={category === "Home Page" ? "/" : `/${category.toLowerCase()}`}
            className={
              pathname === `/${category.toLowerCase()}` ||
              (pathname === "/" && category === "Home Page")
                ? activeLink
                : inactiveLink
            }
            key={category}
          >
            {category}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
