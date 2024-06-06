
import Nav from "components/nav components/Nav";
import IndexVideo from "components/index components/IndexVideo";
import IndexAbout from "components/index components/IndexAbout";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Home | Pedal Project Website</title>
      </Head>
      <main className="flex flex-col gap-4 relative bg-zinc-100">
        <Nav />
        <IndexVideo />
        <IndexAbout />
      </main>
    </>
  );
}


