import Modals from "@/components/Modals/modules/Modals";
import Providers from "../providers";
import "@rainbow-me/rainbowkit/styles.css";
import "./../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Meme Factory",
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers>
          {children}
          <Modals lang={params.lang} />
        </Providers>
      </body>
    </html>
  );
}
