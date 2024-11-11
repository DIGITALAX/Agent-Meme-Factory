"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon } from "wagmi/chains";
import { SetStateAction, createContext, useState } from "react";
import { Cuenta } from "@/components/Common/types/common.types";

const config = getDefaultConfig({
  appName: "Agent Meme Factory",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  chains: [polygon],
  transports: {
    [polygon.id]: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export const ModalContext = createContext<
  | {
      mostrarConexion: boolean;
      setMostrarConexion: (e: SetStateAction<boolean>) => void;
      setCuenta: (e: SetStateAction<Cuenta | undefined>) => void;
      cuenta: Cuenta | undefined;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mostrarConexion, setMostrarConexion] = useState<boolean>(false);
  const [cuenta, setCuenta] = useState<Cuenta | undefined>();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ModalContext.Provider
            value={{
              mostrarConexion,
              setMostrarConexion,
              setCuenta,
              cuenta,
            }}
          >
            {children}
          </ModalContext.Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
