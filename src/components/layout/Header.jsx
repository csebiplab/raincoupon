"use client";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  IconButton,
  List,
  ListItem,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row  border-0 outline-none">
      <Typography
        as={Link}
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
          Blogs
        </ListItem>
      </Typography>
      
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <header>
        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" className="mr-4 cursor-pointer">
               Rain Coupon
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <div className="flex items-center gap-x-4">
              </div>
              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </IconButton>
            </div>
          </Navbar>
        </div>
      </header>
    </>
  );
}
