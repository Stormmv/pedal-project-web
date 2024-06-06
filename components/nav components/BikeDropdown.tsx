import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

type Tbike = {
  name: string;
  link: string;
};

const bikes: Tbike[] = [
  { name: "All Road", link: "/bikeBrand/allroad" },
  { name: "All Triathlon", link: "/bikeBrand/alltriathlon" },
  { name: "All Gravel", link: "/bikeBrand/allgravel" },
  { name: "All Mountain", link: "/bikeBrand/allmountain" },
  { name: "All City", link: "/bikeBrand/allcity" },
  { name: "All E-Bikes", link: "/bikeBrand/allebikes" },
  { name: "Cannondale", link: "/bikeBrand/cannondale" },
  { name: "Cervelo", link: "/bikeBrand/cervelo" },
  { name: "Focus", link: "/bikeBrand/focus" },
  { name: "Norco", link: "/bikeBrand/norco" },
  { name: "Pinarello", link: "/bikeBrand/pinarello" },
  { name: "Ridley", link: "/bikeBrand/ridley" },
  { name: "Trek", link: "/bikeBrand/trek" },
  { name: "All Bikes", link: "/bikeBrand/allbikes" },
];

export default function BikeDropDown() {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={"flex items-center"}>
              Bikes
              {!open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
              {open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                className={
                  "absolute grid w-[16rem] grid-cols-1  gap-2 rounded-lg bg-zinc-100 p-2 text-lg shadow-lg md:w-[24rem] md:grid-cols-2 lg:w-[32rem]"
                }
              >
                {bikes.map((bike) => (
                  <Menu.Item>
                    {({ active }) => (
                      // <a href={bike.link}>
                      //   <div className="font-lg rounded-md bg-zinc-300 p-1 text-zinc-800 shadow-lg transition-colors hover:bg-primary">
                      //     {bike.name}
                      //   </div>
                      // </a>

                      <Link
                        href={bike.link}
                        className={
                          "font-lg rounded-md bg-zinc-300 p-1 text-zinc-800 shadow-lg transition-colors hover:bg-primary"
                        }
                      >
                        {bike.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
