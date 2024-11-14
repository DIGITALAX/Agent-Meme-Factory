"use client";
import { ModalContext } from "@/app/providers";
import { Dictionary, Pantalla } from "@/components/Common/types/common.types";
import { useContext, useEffect } from "react";
import Conexion from "./Conexion";
import Quemadora from "./Quemadora";
import { useAccount } from "wagmi";
import Publicar from "./Publicar";
import { QRCode } from "@farcaster/auth-kit";

export default function ModalsInternal({ dict }: { dict: Dictionary }) {
  const contexto = useContext(ModalContext);
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      contexto?.setMostrarConexion(false);
      contexto?.setPantalla(Pantalla.Perfil);
      contexto?.setCuenta({
        ...contexto?.cuenta,
        direccion: address,
      });
    }
  }, [address]);

  return (
    <>
      {contexto?.publicar && (
        <Publicar dict={dict} setPublicar={contexto?.setPublicar!} />
      )}
      {contexto?.mostrarConexion && (
        <Conexion
          setPantalla={contexto?.setPantalla}
          setMostrarConexion={contexto?.setMostrarConexion}
          dict={dict}
          setCuenta={contexto?.setCuenta}
        />
      )}
      {contexto?.cuenta?.quemadoraAbierta && (
        <Quemadora
          dict={dict}
          setCuenta={contexto?.setCuenta}
          cuenta={contexto?.cuenta}
        />
      )}
      {contexto?.url && (
        <div
          className="inset-0 justify-center fixed z-200 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer items-center justify-center"
          onClick={() => contexto?.setURL(undefined)}
        >
          <div className="relative w-fit h-fit bg-white">
            <QRCode uri={contexto?.url} />
          </div>
        </div>
      )}
    </>
  );
}
