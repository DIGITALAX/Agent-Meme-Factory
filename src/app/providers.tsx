"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon } from "wagmi/chains";
import { SetStateAction, createContext, useState } from "react";
import { Cuenta, Pantalla } from "@/components/Common/types/common.types";
import { AuthKitProvider } from "@farcaster/auth-kit";
import { LensConfig, LensProvider, production } from "@lens-protocol/react-web";
import { bindings } from "@lens-protocol/wagmi";

export const config = getDefaultConfig({
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
      pantalla: Pantalla;
      setPantalla: (e: SetStateAction<Pantalla>) => void;
      setPublicar: (e: SetStateAction<boolean>) => void;
      publicar: boolean;
      url: string | undefined;
      setURL: (e: SetStateAction<string | undefined>) => void;
    }
  | undefined
>(undefined);

const lensConfig: LensConfig = {
  environment: production,
  bindings: bindings(config),
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [pantalla, setPantalla] = useState<Pantalla>(Pantalla.Hogar);
  const [mostrarConexion, setMostrarConexion] = useState<boolean>(false);
  const [publicar, setPublicar] = useState<boolean>(false);
  const [cuenta, setCuenta] = useState<Cuenta | undefined>();
  const [url, setURL] = useState<string | undefined>();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <LensProvider config={lensConfig}>
            <AuthKitProvider
              config={{
                rpcUrl: `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
                // domain: "localhost:3000",
                // siweUri: "http://localhost:3000",
                domain: "agentmeme.xyz",
                siweUri: "https://agentmeme.xyz",
                relay: "https://relay.farcaster.xyz",
              }}
            >
              <ModalContext.Provider
                value={{
                  mostrarConexion,
                  setMostrarConexion,
                  setCuenta,
                  cuenta,
                  setPantalla,
                  pantalla,
                  setPublicar,
                  publicar,
                  url,
                  setURL,
                }}
              >
                {children}
              </ModalContext.Provider>
            </AuthKitProvider>
          </LensProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
