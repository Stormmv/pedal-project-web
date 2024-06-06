import Image from "next/image";
import { useState } from "react";

export default function AboutPhoto() {
  return (
    <div className="mx-auto flex flex-col">
      <Image
        width={3000}
        height={400}
        src={"/aboutgroup.jpg"}
        alt="about image"
        className="relative m-24 mx-auto overflow-hidden"
      ></Image>
    </div>
  );
}
