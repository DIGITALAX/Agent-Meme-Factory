import { SetStateAction, useEffect, useState } from "react";
import { Cuenta } from "../types/common.types";
import { Profile, useLogin, useOwnedHandles } from "@lens-protocol/react-web";
import { useSignIn } from "@farcaster/auth-kit";

const usePerfil = (
  cuenta: Cuenta | undefined,
  setCuenta: (e: SetStateAction<Cuenta | undefined>) => void,
  setURL: (e: SetStateAction<string | undefined>) => void,
) => {
  const [copiado, setCopiado] = useState<boolean>(false);
  const [lensCargando, setLensCargando] = useState(false);
  const [farcasterCargando, setFarcasterCargando] = useState(false);
  const [abierto, setAbierto] = useState<{
    lens: boolean;
    farcaster: boolean;
  }>({
    lens: false,
    farcaster: false,
  });
  const { execute } = useLogin();
  const handles = useOwnedHandles({ for: cuenta?.direccion as string });
  const { signIn, connect, signOut, url, isConnected, data, error } = useSignIn(
    {
      onSuccess: (datos) => {
        setCuenta({
          ...cuenta,
          farcaster: datos,
        });
        setFarcasterCargando(false);
      },
      onError: () => {
        setFarcasterCargando(false);
      },
    }
  );


  const manejarFarcaster = async () => {
    setFarcasterCargando(true);
    try {
      if (isConnected && cuenta?.farcaster) {
        signOut();
        setCuenta({
          ...cuenta,
          farcaster: undefined,
        });
      } else {
        connect();
        signIn();
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setFarcasterCargando(false);
  };

  const manejarLens = async () => {
    setLensCargando(true);
    try {
      if (handles?.data && handles?.data?.length > 0) {
        const result = await execute({
          address: cuenta?.direccion as string,
          profileId: handles?.data?.[0]?.linkedTo?.nftTokenId as any,
        });
        if (result.isSuccess()) {
          setCuenta({
            ...cuenta,
            lens: result.value as Profile,
          });
        } else {
          setCuenta({
            ...cuenta,
            lens: undefined,
          });
        }
      } else {
        setCuenta({
          ...cuenta,
          lens: undefined,
        });
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setLensCargando(false);
  };

  useEffect(() => {
    if (url) {
      setURL(url);
    }
  }, [url]);

  return {
    copiado,
    setCopiado,
    manejarLens,
    manejarFarcaster,
    lensCargando,
    farcasterCargando,
    abierto,
    setAbierto,
  };
};

export default usePerfil;
