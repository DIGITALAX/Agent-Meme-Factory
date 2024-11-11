import { useState } from "react";
import getDefaultProfile from "../../../../graphql/lens/queries/default";
import generateChallenge from "../../../../graphql/lens/queries/challenge";
import authenticate from "../../../../graphql/lens/mutations/authenticate";
import { setAuthenticationToken } from "@/lib/utils";
import { Profile } from "../../../../generated";
import { useSignMessage } from "wagmi";
import { ModalContext } from "@/app/providers";

const usePerfil = (contexto: React.ContextType<typeof ModalContext>) => {
  const { signMessageAsync } = useSignMessage();
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

  const manejarFarcaster = async () => {
    setFarcasterCargando(true);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setFarcasterCargando(false);
  };

  const manejarLens = async () => {
    setLensCargando(true);
    try {
      const profile = await getDefaultProfile(
        {
          for: contexto?.cuenta?.direccion,
        },
        false
      );

      if (profile?.data?.defaultProfile?.id) {
        const challengeResponse = await generateChallenge({
          for: profile?.data?.defaultProfile?.id,
          signedBy: contexto?.cuenta?.direccion,
        });
        const signature = await signMessageAsync({
          message: challengeResponse.data?.challenge.text!,
        });
        const accessTokens = await authenticate({
          id: challengeResponse.data?.challenge.id,
          signature: signature,
        });
        if (accessTokens) {
          setAuthenticationToken({ token: accessTokens.data?.authenticate! });
          contexto?.setCuenta({
            ...contexto?.cuenta,
            lens: profile?.data?.defaultProfile as Profile,
          });
        }
      } else {
        contexto?.setCuenta({
          ...contexto?.cuenta,
          lens: undefined,
        });
        setNotificacion(Notificacion.Perfil);
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setLensCargando(false);
  };

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
