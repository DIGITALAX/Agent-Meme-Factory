"use client";
import useBar from "@/components/common/hooks/useBar";
import Bar from "@/components/common/modules/Bar";
import Cambio from "@/components/common/modules/Cambio";
import { LuPlus } from "react-icons/lu";
import { Dictionary } from "../types/common.types";

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
    pantalla,
    setPantalla,
    fijado,
    setFijado,
    filtro,
    setFiltro,
    fabrica,
    setFabrica,
  } = useBar();
  return (
    <div
      className="relative w-full h-screen bg-negro flex items-start justify-center flex-row overflow-scroll-none"
      onClick={(e) => {
        e.stopPropagation();
        setAbrirFijado(false);
      }}
    >
      <Bar
        setPantalla={setPantalla}
        pantalla={pantalla}
        abrirFijado={abrirFijado}
        setAbrirFijado={setAbrirFijado}
        dict={dict}
        setFijado={setFijado}
        fijado={fijado}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <div className="relative w-full h-full flex items-start justify-center pt-5">
        <Cambio
          setPantalla={setPantalla}
          pantalla={pantalla}
          setFijado={setFijado}
          fijado={fijado}
          dict={dict}
          fabrica={fabrica}
          setFabrica={setFabrica}
        />
      </div>
      <div className="absolute flex rounded-md bg-ligero bottom-3 right-3 w-8 items-center justify-center h-8 cursor-pointer active:scale-95">
        <LuPlus color="white" opacity={80} size={25} />
      </div>
    </div>
  );
}
