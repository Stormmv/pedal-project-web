import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Bebas_Neue, Poppins, Open_Sans } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin-ext"],
  weight: ["400"],
  variable: "--font-bebas",
});

const sans = Open_Sans({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={bebas.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
