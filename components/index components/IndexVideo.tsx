import Image from "next/image";
import { useState } from "react";

export default function Video() {
    return (
        <div className="relative mx-auto overflow-hidden m-24 max-[90%]:">
            <video className="w-full" loop muted autoPlay controls={false}>
                <source src="/test.mp4"/>
            </video>
        </div>
)
}
