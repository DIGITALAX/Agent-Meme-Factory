"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon } from "wagmi/chains";
import { SetStateAction, createContext, useState } from "react";
import { Cuenta, Pantalla } from "@/components/Common/types/common.types";
import { AuthKitProvider } from "@farcaster/auth-kit";

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
      pantalla: Pantalla;
      setPantalla: (e: SetStateAction<Pantalla>) => void;
      setPublicar: (e: SetStateAction<boolean>) => void;
      publicar: boolean;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [pantalla, setPantalla] = useState<Pantalla>(Pantalla.Hogar);
  const [mostrarConexion, setMostrarConexion] = useState<boolean>(false);
  const [publicar, setPublicar] = useState<boolean>(false);
  const [cuenta, setCuenta] = useState<Cuenta | undefined>();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <AuthKitProvider
            config={{
              rpcUrl: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
              domain: "agentmeme.xyz",
              siweUri: "https://agentmeme.xyz",
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
              }}
            >
              {children}
            </ModalContext.Provider>
          </AuthKitProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
