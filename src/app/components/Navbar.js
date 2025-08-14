import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navitems = [
    {
      item: "Home",
      path: "/",
    },
    {
      item: "Brands",
      path: "/brands",
    },
    {
      item: "Products",
      path: "/products",
    },
    {
      item: "About Us",
      path: "/about-us",
    },
    {
      item: "Career",
      path: "/career",
    },
    {
      item: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="navbar bg-[#F1F2F6] shadow-sm fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/logo.svg" alt="Logo" width={120} height={65} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navitems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className=" font-medium text-base font-medium"
                  href={item.path}
                >
                  {item.item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="input border-0 bg-transparent">
          <svg
            className="h-[1.5em] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input className="text-black text-base bg-transparent " type="search" required placeholder="Search Products Here.." />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
