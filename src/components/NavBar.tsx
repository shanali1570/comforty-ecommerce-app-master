import React from "react";
import Container from "./Container";
import { navBarList } from "@/constants";
import Link from "next/link";
import { getSession } from "@/lib/manageSession";

const NavBar = async () => {
  const session = await getSession();

  return (
    <div className="bg-white shadow-md">
      <Container className="h-10">
        {/* Responsive Navbar */}
        <div className="h-full flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-3 md:gap-7">
          {/* Navbar Links */}
          {navBarList?.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="navBarItem text-sm md:text-base hover:text-darkOrange transition"
            >
              {item.title}
            </Link>
          ))}

          {/* Conditional Links Based on Session */}
          {session ? (
            <Link
              href={"/dashboard"}
              className="navBarItem text-sm md:text-base hover:text-darkOrange transition"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href={"/signin"}
              className="navBarItem text-sm md:text-base hover:text-darkOrange transition"
            >
              Sign in
            </Link>
          )}

          {session?.user?.email === process.env.ADMIN_EMAIL && (
            <Link
              href={"/studio"}
              className="navBarItem text-sm md:text-base hover:text-darkOrange transition"
            >
              Studio
            </Link>
          )}

          {session?.user && (
            <Link
              href={"/orders"}
              className="navBarItem text-sm md:text-base hover:text-darkOrange transition"
            >
              Orders
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
