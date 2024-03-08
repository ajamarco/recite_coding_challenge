"use client";
//sidebar component that displays the links to the different pages

//import libraries
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  //get the current pathname
  const pathname = usePathname();

  //save the classnames for the active and inactive links
  const activeLink =
    "flex items-center active-nav-link text-white py-4 pl-6 nav-item";
  const inactiveLink =
    "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item";

  //manually saving the categories' names - this can come from an API
  const categories = ["Home Page", "Missions", "Ships", "Rockets"];

  return (
    <aside className="relative bg-sidebar h-screen w-64 sm:block shadow-xl">
      <div className="p-6">
        <Link
          href="/"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          SpaceX Visualizer
        </Link>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
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
    </aside>
  );
};

export default Sidebar;
