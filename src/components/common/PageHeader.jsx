"use client";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Link from "next/link";

const PageHeader = ({
  bg,
  title,
  className,
  breadcrumbs = [{ title: "Home", route: "/" }],
  page = {},
}) => {
  return (
    <header
      className={className}
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-14">
        <Typography
          variant="h2"
          color="white"
          className="mb-4 text-shadow text-white"
        >
          {title}
        </Typography>
        <Breadcrumbs
          separator={
            <ArrowLongRightIcon
              className="h-4 w-4 text-white"
              strokeWidth={2.5}
            />
          }
          className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md backdrop-saturate-150 p-1"
        >
          {breadcrumbs.map((ele) => (
            <Link
              href={ele.route}
              className="rounded-full bg-white/30 px-3 py-1 font-medium text-white/90"
            >
              {ele.title}
            </Link>
          ))}
          <Link
            href={page.route}
            className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
          >
            {page.title}
          </Link>
        </Breadcrumbs>
      </div>
    </header>
  );
};

export default PageHeader;
