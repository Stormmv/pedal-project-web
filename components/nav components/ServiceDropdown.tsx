import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

type Tservices = {
  name: string;
  link: string;
};

const bikes: Tservices[] = [
  { name: "Workshop Services", link: "/services/workshop" },
  { name: "Bike Fittings", link: "/services/bikefits" },
  { name: "Delivery & Shipping", link: "/services/delivship" },
  { name: "Make A Booking", link: "/services/booking" },
];

export default function ServiceDropDown() {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={"flex items-center"}>
              Services
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
                  "absolute grid w-[16rem] grid-cols-1 gap-2 rounded-lg bg-zinc-100 p-2 text-lg shadow-lg"
                }
              >
                {bikes.map((bike) => (
                  <Menu.Item>
                    {({ active }) => (
                      // <a href={bike.link}>
                      //   <div className="font-lg rounded-md bg-zinc-300 p-1 text-zinc-800 shadow-md transition-colors hover:bg-primary">
                      //     {bike.name}
                      //   </div>
                      // </a>

                      <Link
                        href={bike.link}
                        className="font-lg rounded-md bg-zinc-300 p-1 text-zinc-800 shadow-md transition-colors hover:bg-primary"
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
