import Image from "next/image";
import { useEffect, useState } from "react";
import BikeDropDown from "./BikeDropdown";
import ServiceDropDown from "./ServiceDropdown";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10">
      <div className="relative flex h-24 items-center justify-between gap-4 bg-zinc-100 px-8 shadow-lg">
        <div className="mx-4">
          <a href="/" className="">
            <Image
              width={180}
              height={200}
              src="/pedalmain.png"
              // src="/pedalsmall.png"
              alt="Pedal Project Logo"
              className="hidden md:block"
            />
              <Image
              width={90}
              height={50}
              // src="/pedalmain.png"
              src="/pedalsmall.png"
              alt="Pedal Project Logo"
              className="block md:hidden"
            />
          </a>
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 gap-8 text-2xl font-medium text-zinc-800">
          <span className="cursor-pointer hover:underline">
            <BikeDropDown />
          </span>
          <span className="cursor-pointer hover:underline">
            <ServiceDropDown />
          </span>
          <span className="cursor-pointer hover:underline">
            {/* <a href="#sales">Sales</a> */}
            <Link href="/sales">Sales</Link>
          </span>
          <span className="cursor-pointer hover:underline">
            {/* <a href="/about">About</a> */}
            <Link href="/about">About</Link>
          </span>
          <span className="cursor-pointer hover:underline">
            {/* <a href="#contact">Contact</a> */}
            <Link href="/contact">Contact</Link>
          </span>
          <span className="cursor-pointer hover:underline">
            {/* <a href="#events">Events</a> */}
            <Link href="/events">Events</Link>
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-xl font-medium text-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#27272A"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: searchOpen ? 200 : 0,
            }}
            className={`overflow-hidden`}
            transition={{ duration: 0.3 }}
          >
            <input
              className={"block w-full rounded-lg border px-4 py-2"}
              type="text"
              placeholder="Search..."
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
