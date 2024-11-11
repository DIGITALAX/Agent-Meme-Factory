"use client";
import { ModalContext } from "@/app/providers";
import { Dictionary } from "@/components/Common/types/common.types";
import { useContext, useEffect } from "react";
import Conexion from "./Conexion";
import Quemadora from "./Quemadora";
import { useAccount } from "wagmi";

export default function ModalsInternal({ dict }: { dict: Dictionary }) {
  const contexto = useContext(ModalContext);
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      contexto?.setCuenta({
        ...contexto?.cuenta,
        direccion: address,
      });
    }
  }, [address]);

  return (
    <>
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
    </>
  );
}
