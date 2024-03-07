import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <Link
          href="/"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          SpaceX Visualizer
        </Link>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link
          href="/"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          Home Page
        </Link>
        <Link
          href="/missions"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          Missions
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
