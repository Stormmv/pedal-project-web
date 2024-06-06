import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 p-2 text-center text-zinc-800">
      <h1 className="text-9xl">Pedal Project</h1>
      <h2 className="text-6xl">Wellingtons Bike Shop</h2>
        <p className="text-2xl mx-96 p-4 open_sans">Our experienced and knowledgeable staff have been been providing excellent service for Wellington cyclists for many years. We only stock brands that we know and trust so when you are shopping with us you can guarantee that if we won't ride it, we won't sell it.</p>
    </div>
  );
}
