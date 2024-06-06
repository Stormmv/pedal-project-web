import { Disclosure } from "@headlessui/react";
import Nav from "components/nav components/Nav";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";
import Footer from "components/nav components/Footer";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Workshop | Pedal Project Website</title>
      </Head>
      <Nav />
      <main className="relative mt-24 flex w-full items-center flex-col gap-4 bg-zinc-100 pb-24">
        <div className="flex w-full">
          <Image
            src="/aboutgroup.jpg"
            width={10000}
            height={10000}
            alt="img"
            className="h-[32rem] w-full object-cover"
          />

          <div className="absolute flex h-[32rem] w-full items-center justify-center bg-black bg-opacity-30">
            <h1 className="text-4xl lg:text-9xl text-zinc-100">Pedal Project Workshop</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full md:max-w-2xl lg:max-w-5xl">
          <h2 className="p-4 text-2xl md:text-3xl lg:text-5xl text-center">
            To ensure the safety of your bike, we recommend a full service at
            least once a year.
          </h2>

          <h2 className="p-4  text-lg md:text-2xl lg:text-3xl  text-center">
            Your bike should be regularly serviced to ensure any little issues
            are picked up before they become big and expensive!
          </h2>
        </div>

        <div className="flex flex-col bg-zinc-100 p-2 text-zinc-800 w-full md:max-w-2xl lg:max-w-5xl">
          <p className="text-md open_sans p-2">
            Pedal Project services all makes and models of bikes, from mountain
            bikes to road bikes, commuter bikes, e-bikes, and everything in
            between. We also offer repair and replacement quotes for insurance.
          </p>
          <p className="text-md open_sans p-2">
            Pedal Project has a fully equipped bicycle service workshop staffed
            by a professional, qualified team who live and breathe cycling. They
            have a passion for all things bike, so you can be sure you'll always
            be met with a friendly smile.
          </p>
          <p className="text-md open_sans p-2">
            So if you need your bike fixed, checked, repaired, or just want some
            good old bike advice, give us a call at 04 385 4238 or email us at
            shop@pedalproject.co.nz.
          </p>
          <p className="text-md open_sans p-2">
            PLEASE BOOK - Booking is always preferred as our workshop gets busy,
            and we need to ensure we have enough time to complete all the jobs
            on time. We aim to provide same-day service.
          </p>
          <h2 className="text-5xl p-5 text-center">Service Packages</h2>
        </div>

        <div className="mx-auto grid flex-col gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-3xl">General Service: $100</h3>
            <ul className="open_sans list-disc">
              <li>Brake Check</li>
              <li>Check and Tighten all fastenings</li>
              <li>Bike washed</li>
              <li>Inspect hubs and headset</li>
              <li>Check rear deraileur hanger and tune gears</li>
              <li>Visually check bike for worn/damaged parts</li>
              <li>Lubrication where needed</li>
              <li>Inflate Tyres</li>
              <li>Road test</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">Premium Service: $180</h3>
            <ul className="open_sans list-disc">
              <li>Lubrication of all cables</li>
              <li>Bottom bracket removed, inspected and serviced</li>
              <li>Hubs checked and adjusted</li>
              <li>Check rear deraileur hanger and tune gears</li>
              <li>Headset checked and adjusted</li>
              <li>Basic wheel true (no tension/dishing adjustment)</li>
              <li>Quick drivetrain clean</li>
              <li>Brake Check</li>
              <li>Check and Tighten all fastenings</li>
              <li>Bike washed</li>
              <li>Inflate Tyres</li>
              <li>Road test</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">Other Services:</h3>
            <ul className="open_sans list-disc">
              <li>Service charge per hour $100</li>
              <li>Bicycle Re/Assembly: from $60</li>
              <li>Bicycle Assembly - Custom Build - $ H/R</li>
              <li>Brake bleeding: $40</li>
              <li>Suspension service: from $60</li>
              <li>Boxing Bike: $60</li>
              <li>Wheel Truing: $40</li>
              <li>Wheel building: $100</li>
              <li>Fork fitting: From $45</li>
              <li>Tyre / Tube fitting: $10</li>
              <li>UST Tyre fitting (inc, tyre sealant): $30</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
