"use client";
import useBar from "@/components/Common/hooks/useBar";
import Bar from "@/components/Common/modules/Bar";
import Cambio from "@/components/Common/modules/Cambio";
import { LuPlus } from "react-icons/lu";
import { Dictionary } from "../types/common.types";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { useContext } from "react";
import { ModalContext } from "@/app/providers";

export default function Entry({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const {
    abrirFijado,
    setAbrirFijado,
    fijado,
    setFijado,
    filtro,
    setFiltro,
    fabrica,
    setFabrica,
  } = useBar();
  const router = useRouter();
  const { isConnected } = useAccount();
  const contexto = useContext(ModalContext);
  return (
    <div
      className="relative w-full h-screen bg-negro flex items-start justify-center flex-row overflow-scroll-none"
      onClick={(e) => {
        e.stopPropagation();
        setAbrirFijado(false);
      }}
    >
      <Bar
        setPantalla={contexto?.setPantalla!}
        pantalla={contexto?.pantalla!}
        abrirFijado={abrirFijado}
        setAbrirFijado={setAbrirFijado}
        dict={dict}
        setFijado={setFijado}
        fijado={fijado}
        filtro={filtro}
        setFiltro={setFiltro}
        router={router}
        conectado={
          contexto?.cuenta?.quemadora?.address !== undefined || isConnected
        }
        setMostrarConexion={contexto?.setMostrarConexion!}
      />
      <div className="relative w-full h-full flex items-start justify-center pt-5">
        <Cambio
          setPantalla={contexto?.setPantalla!}
          pantalla={contexto?.pantalla!}
          setFijado={setFijado}
          fijado={fijado}
          dict={dict}
          setCuenta={contexto?.setCuenta!}
          fabrica={fabrica}
          cuenta={contexto?.cuenta}
          setFabrica={setFabrica}
        />
      </div>
      <div
        className="absolute flex rounded-md bg-ligero bottom-3 right-3 w-8 items-center justify-center h-8 cursor-pointer active:scale-95"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !(contexto?.cuenta?.quemadora?.address !== undefined || isConnected)
          ) {
            contexto?.setMostrarConexion(true);
          } else {
          }
        }}
      >
        <LuPlus color="white" opacity={80} size={25} />
      </div>
    </div>
  );
}
