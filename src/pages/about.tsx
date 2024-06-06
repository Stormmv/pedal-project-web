import Nav from "components/nav components/Nav";
import AboutPhoto from "components/about components/AboutPhoto";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function About() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>About | Pedal Project Website</title>
      </Head>
      <main className="flex flex-col gap-4 relative bg-zinc-100">
        <Nav />
        <AboutPhoto />
      </main>
    </>
  );
}


