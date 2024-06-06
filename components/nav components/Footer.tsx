import Image from "next/image";
import { useEffect, useState } from "react";
import BikeDropDown from "./BikeDropdown";
import ServiceDropDown from "./ServiceDropdown";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex h-24 w-full justify-between bg-orange-500">
      <div className="mx-auto flex w-full max-w-2xl flex-col justify-center text-white text-lg">
        <span className="">
          Copyright Pedal Project 2024 | Ts & Cs and Privacy Policy | Shipping &
          Delivery
        </span>

        <span className="">
          Site created by <a href="https://link2it.cc/p/mv">Michael Visser</a>
        </span>
      </div>
    </div>
  );
}
